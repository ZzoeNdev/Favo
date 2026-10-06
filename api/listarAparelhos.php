<?php

include 'cors.php';
include 'conexao.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}

$sql = "SELECT eletro.id, eletro.nome, eletro.watts, eletro.estado, eletro.horas_uso_medio, comodo.nome as nomeComodo
             FROM eletro
             JOIN comodo ON eletro.id_comodo = comodo.id
             JOIN casa ON comodo.id_casa = casa.id
             WHERE casa.id_usuario = :id_usuario";
             
$stmt = $pdo->prepare($sql);
$stmt->execute([':id_usuario' => $_SESSION['user_id']]);
$aparelhos = $stmt->fetchAll();

$resultado = [];

foreach ($aparelhos as $a){
    $sqlDesligados = "SELECT consumo_kwh FROM consumo WHERE id_eletro = :id_eletro AND MONTH(consumo.data) = MONTH(CURRENT_DATE()) AND YEAR(consumo.data) = YEAR(CURRENT_DATE())";
    $stmtDesligados = $pdo->prepare($sqlDesligados);
    $stmtDesligados->execute(':id_eletro' => $a['id']);
    $aparelhosDesligados = $stmtDesligados->fetch();
    $kwhFechado = $aparelhosDesligados['consumo_kwh'] ?? 0;

    $kwhLigados = 0;
    if ($a['estado'] === 'ligado' && $a['ligado_desde']){
        $horasLigado = (time() - strtotime($a['ligado_desde'])) / 3600;
        $kwhLigados = ($a['watts'] * $horasLigado) / 1000;
    }

    $consumoTotal = $kwhFechado + $kwhLigados;

    $resultado[] = [
        'id' = $a['id'],
        'nome' = $a['nome'],
        'nomeComodo' = $a['nomeComodo'],
        'estado' = $a['estado'],
        'consumo' = round($consumoTotal,2),
        'custo' = round($consumoTotal*0.739,2)
    ];
}

echo json_encode($resultado); 

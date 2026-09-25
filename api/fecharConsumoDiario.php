<?php

include 'cors.php';
include 'conexao.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}

$sql = "SELECT eletro.id, eletro.watts, eletro.ligado_desde
        FROM eletro
        JOIN comodo ON eletro.id_comodo = comodo.id
        JOIN casa ON comodo.id_casa = casa.id
        WHERE casa.id_usuario = :id_usuario AND eletro.estado = 'ligado'";
$stmt = $pdo->prepare($sql);
$stmt->execute([':id_usuario' => $_SESSION['user_id']]);
$aparelhosLigados = $stmt->fetchAll();

$hoje = date('Y-m-d');
$inicioDia = $hoje . ' 00:00:00';
$agora = date('Y-m-d H:i:s');

foreach ($aparelhosLigados as $aparelho) {
    $inicioContagem = max($aparelho['ligado_desde'], $inicioDia);
    $segundos = strtotime($agora) - strtotime($inicioContagem);
    $horas = $segundos / 3600;
    $kwh = ($aparelho['watts'] * $horas) / 1000;

    $sqlBuscarConsumo = "SELECT id FROM consumo WHERE id_eletro = :id_eletro AND data = :data";
    $stmtBuscarConsumo = $pdo->prepare($sqlBuscarConsumo);
    $stmtBuscarConsumo->execute([':id_eletro' => $aparelho['id'], ':data' => $hoje]);
    $consumoExistente = $stmtBuscarConsumo->fetch();

    if ($consumoExistente) {
        $sqlAtualizarConsumo = "UPDATE consumo SET consumo_kwh = :consumo_kwh WHERE id = :id";
        $stmtAtualizarConsumo = $pdo->prepare($sqlAtualizarConsumo);
        $stmtAtualizarConsumo->execute([':consumo_kwh' => $kwh, ':id' => $consumoExistente['id']]);
    } else {
        $sqlInserirConsumo = "INSERT INTO consumo (id_eletro, data, inicio, fim, consumo_kwh) VALUES (:id_eletro, :data, :inicio, :fim, :consumo_kwh)";
        $stmtInserirConsumo = $pdo->prepare($sqlInserirConsumo);
        $stmtInserirConsumo->execute([':id_eletro' => $aparelho['id'], ':data' => $hoje, ':inicio' => $inicioContagem, ':fim' => $agora, ':consumo_kwh' => $kwh]);
    }
}

echo json_encode(['message' => 'Consumo diário atualizado com sucesso']);
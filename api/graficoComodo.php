<?php

include 'cors.php';
include 'conexao.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}

$idComodo = $_GET['comodo'] ?? null;

function buscarConsumoPorDia($pdo, $idComodo, $mes, $ano) {
    $sql = "SELECT DAY(data) AS dia, SUM(consumo_kwh) AS consumo_total
            FROM consumo
            JOIN eletro ON consumo.id_eletro = eletro.id
            WHERE eletro.id_comodo = :id_comodo
            AND MONTH(data) = :mes
            AND YEAR(data) = :ano
            GROUP BY DAY(data)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':id_comodo' => $idComodo, ':mes' => $mes, ':ano' => $ano]);
    
    $resultado = [];
    foreach ($stmt->fetchAll() as $linha) {
        $resultado[$linha['dia']] = (float)$linha['consumo_total'];
    }
    return $resultado;
}

$mesAtualDados = buscarConsumoPorDia($pdo, $idComodo, date('m'), date('Y'));
$mesAnteriorDados = buscarConsumoPorDia($pdo, $idComodo, date('m', strtotime('-1 month')), date('Y', strtotime('-1 month')));

$grafico = [];

for ($dia = 1; $dia <= 31; $dia++) {
    $grafico[] = [
        'x' => $dia,
        'mesAtual' => $mesAtualDados[$dia] ?? 0,
        'mesAnterior' => $mesAnteriorDados[$dia] ?? 0
    ];
}

echo json_encode($grafico);
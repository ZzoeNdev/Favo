<?php

include 'cors.php';
include 'conexao.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}

function totalEco($pdo, $idUsuario, $mes, $ano, $ateODia){
    $sql="SELECT SUM(consumo.consumo_kwh) AS total
        FROM consumo
        JOIN eletro ON consumo.id_eletro = eletro.id
        JOIN comodo ON eletro.id_comodo = comodo.id
        JOIN casa ON comodo.id_casa = casa.id
        WHERE casa.id_usuario = :id_usuario
        AND MONTH(consumo.data) = :mes
        AND YEAR(consumo.data) = :mes
        AND DAY(consumo.data) = :ateODia";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':id_usuario' => $idUsuario, ':mes' => $mes, ':ano' => $ano, ':dia' => $ateODia
    ]);
    return $stmt->fetch()['total'] ?? 0;
}

$diaAtual = (int) date('j');

$mesAtual = totalEco($pdo, $_SESSION['user_id'], date('m'), date('y'), $diaAtual);
$mesAnterior = totalEco($pdo, $_SESSION['user_id'], date('m', strtotime('-1 month')), date('y', strtotime('-1 month')), $diaAtual);

$economiaKwh = $mesAnterior - $mesAtual

echo json_encode([
    'economiaReais' => round($economiaKwh * 0.739, 2),
    'economizou' => $economiaKwh >= 0
])
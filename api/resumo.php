<?php

include 'cors.php';
include 'conexao.php';


if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}

$sqlDesligados = "SELECT SUM(consumo.consumo_kwh) AS consumo_total
                  FROM consumo
                  JOIN eletro ON consumo.id_eletro = eletro.id
                  JOIN comodo ON eletro.id_comodo = comodo.id
                  JOIN casa ON comodo.id_casa = casa.id
                  WHERE casa.id_usuario = :id_usuario ";
$stmtDesligados = $pdo->prepare($sqlDesligados);
$stmtDesligados->execute([':id_usuario' => $_SESSION['user_id']]);
$totalDesligados = $stmtDesligados->fetch()['consumo_total'] ?? 0;

$sqlLigados = "SELECT eletro.watts, eletro.ligado_desde
               FROM eletro
               JOIN comodo ON eletro.id_comodo = comodo.id
               JOIN casa ON comodo.id_casa = casa.id
               WHERE casa.id_usuario = :id_usuario AND eletro.estado = 'ligado'";
$stmtLigados = $pdo->prepare($sqlLigados);
$stmtLigados->execute([':id_usuario' => $_SESSION['user_id']]);

$totalaoVivo = 0;
foreach ($stmtLigados->fetchAll() as $aparelho) {
    $segundosLigado = time() - strtotime($aparelho['ligado_desde']);
    $horasLigado = $segundosLigado / 3600;
    $totalaoVivo += ($aparelho['watts'] * $horasLigado) / 1000;
}

$consumoTotalKwh = $totalDesligados + $totalaoVivo;

echo json_encode([
    'consumoTotal' => round($consumoTotalKwh, 2),
    'custoReais' => round($consumoTotalKwh * 0.739, 2)
]);
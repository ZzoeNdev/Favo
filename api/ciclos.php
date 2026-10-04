<?php

include 'cors.php';
include 'conexao.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}


function dadosCiclo($pdo, $id_usuario, $mes, $ano) {
    $sql = "SELECT SUM(consumo.consumo_kwh) AS total
            FROM consumo
            JOIN eletro ON consumo.id_eletro = eletro.id
            JOIN comodo ON eletro.id_comodo = comodo.id
            JOIN casa ON comodo.id_casa = casa.id
            WHERE casa.id_usuario = :id_usuario 
            AND MONTH(consumo.data) = :mes 
            AND YEAR(consumo.data) = :ano";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':id_usuario' => $id_usuario, ':mes' => $mes, ':ano' => $ano]);
    $totalKwh = $stmt->fetch()['total'] ?? 0;

    $sqlUso = "SELECT eletro.nome, SUM(consumo.consumo_kwh) AS total
        FROM consumo
        JOIN eletro ON consumo.id_eletro = eletro.id
        JOIN comodo ON eletro.id_comodo = comodo.id
        JOIN casa ON comodo.id_casa = casa.id
        WHERE casa.id_usuario = :id_usuario
        GROUP BY eletro.id, eletro.nome
        ORDER BY total DESC
        LIMIT 1";

    $stmtUso = $pdo->prepare($sqlUso);
    $stmtUso -> execute([':id_usuario' => $_SESSION['user_id']]);
    $maisUso = $stmtUso->fetch();

    return [
        'total_kwh' => round($totalKwh, 3) ?? 0,
        'custo' => round($totalKwh * 0.739, 2) ?? 0,
        'mais_uso' => $maisUso['nome'] ?? "Nenhum ainda"
    ];
}

$mesPassado = strtotime("-1 month");

$cicloAtual = dadosCiclo($pdo, $_SESSION['user_id'], date('m'), date('Y'));
$cicloAnterior = dadosCiclo($pdo, $_SESSION['user_id'], date('m', $mesPassado), date('Y', $mesPassado));

echo json_encode([
    'ciclo_atual' => $cicloAtual,
    'ciclo_anterior' => $cicloAnterior
]);
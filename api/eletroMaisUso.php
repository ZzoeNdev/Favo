<?php

include 'cors.php';
include 'conexao.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}

$sql = "SELECT eletro.nome, SUM(consumo.consumo_kwh) AS total
        FROM consumo
        JOIN eletro ON consumo.id_eletro = eletro.id
        JOIN comodo ON eletro.id_comodo = comodo.id
        JOIN casa ON comodo.id_casa = casa.id
        WHERE casa.id_usuario = :id_usuario
        GROUP BY eletro.id, eletro.nome
        ORDER BY total DESC
        LIMIT 1";

$stmt = $pdo->prepare($sql);
$stmt -> execute([':id_usuario' => $_SESSION['user_id']]);
$resultado = $stmt->fetch();

echo json_encode(['nome' => $resultado['nome'] ?? "Nenhum ainda"]);
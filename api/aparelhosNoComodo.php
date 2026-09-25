<?php

include 'cors.php';
include 'conexao.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}

$idComodo = $_GET['comodo'] ?? null;

$sql = "SELECT nome, watts, SUM(watts) as total FROM eletro WHERE id_comodo = :id_comodo GROUP BY nome, watts";
$stmt = $pdo->prepare($sql);
$stmt->execute([':id_comodo' => $idComodo]);

echo json_encode($stmt->fetchAll());
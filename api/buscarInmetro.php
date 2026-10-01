<?php

include 'cors.php';
include 'conexao.php';

$dados = json_decode(file_get_contents("php://input"), true);

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}

$sql = "SELECT nome,kwh FROM inmetro WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute([':id' => $dados['codigoBarras']]);
$dados = $stmt->fetch();

echo json_encode($dados)
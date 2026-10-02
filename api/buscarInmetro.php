<?php

include 'cors.php';
include 'conexao.php';

$dados = json_decode(file_get_contents("php://input"), true);

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}

$sql = "SELECT nome,kwh FROM inmetro WHERE codigoBarras = :codigoBarras";
$stmt = $pdo->prepare($sql);
$stmt->execute([':codigoBarras' => $dados['codigoBarras']]);
$eletro = $stmt->fetch();

echo json_encode($eletro);
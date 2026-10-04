<?php

include 'cors.php';
include 'conexao.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}

$sql = "SELECT nome,email,foto,meta FROM usuario WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute([':id' => $_SESSION['user_id']]);
$dados = $stmt->fetch();

echo json_encode($dados);

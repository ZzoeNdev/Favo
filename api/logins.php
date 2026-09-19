<?php

session_start();

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST');

include 'conexao.php';

$dados = json_decode(file_get_contents("php://input"), true);

$sql = "SELECT * FROM usuario WHERE email = :email";
$stmt = $pdo->prepare($sql);

$stmt->execute([
    ':email' => $dados['email'],
]);

$user = $stmt->fetch();

if ($user && password_verify($dados['senha'], $user['senha'])) {
    echo json_encode(['message' => 'Login bem-sucedido']);
} else {
    echo json_encode(['message' => 'Email ou senha incorretos']);
}


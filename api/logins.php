<?php

include 'cors.php';
include 'conexao.php';

$dados = json_decode(file_get_contents("php://input"), true);

$sql = "SELECT * FROM usuario WHERE email = :email";
$stmt = $pdo->prepare($sql);

$stmt->execute([
    ':email' => $dados['email'],
]);

$user = $stmt->fetch();

if ($user && password_verify($dados['senha'], $user['senha'])) {
    $_SESSION['user_id'] = $user['id'];
    echo json_encode(['logado' => true, 'message' => 'Login bem-sucedido']);
} else {
    http_response_code(401);
    echo json_encode(['logado' => false, 'message' => 'Email ou senha incorretos']);
}


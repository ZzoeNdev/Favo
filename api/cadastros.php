<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST');

include 'conexao.php';

$dados = json_decode(file_get_contents("php://input"), true);

$verificaEmail = "SELECT * FROM usuario WHERE email = :email";
$stmt = $pdo->prepare($verificaEmail);

$stmt->execute([
    ':email' => $dados['email']
]);

if ($stmt->fetch()) {
    echo json_encode(['message' => 'Email já cadastrado']);
    exit;
} else {
    $sql = "INSERT INTO usuario (nome, email, senha) VALUES (:nome, :email, :senha)";
    $stmt = $pdo->prepare($sql);

    $stmt->execute([
        ':nome' => $dados['nome'],
        ':email' => $dados['email'],
        ':senha' => password_hash($dados['senha'], PASSWORD_DEFAULT)
    ]);

    echo json_encode(['message' => 'Cadastro realizado com sucesso']);
}
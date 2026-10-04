<?php

include 'cors.php';
include 'conexao.php';

$dados = json_decode(file_get_contents("php://input"), true);

$verificaEmail = "SELECT * FROM usuario WHERE email = :email";
$stmt = $pdo->prepare($verificaEmail);

$stmt->execute([
    ':email' => $dados['email']
]);

$nome = trim($dados['nome'] ?? '');
$email = trim($dados['email'] ?? '');
$senha = trim($dados['senha'] ?? '');

if (!$dados || $nome === '' || $email === '' || $senha === '') {
    http_response_code(400);
    echo json_encode(['message' => 'Por favor, preencha todos os campos obrigatórios.']);
    exit;
}

if ($stmt->fetch()) {
    echo json_encode(['message' => 'Email já cadastrado']);
    exit;
} else {
    $sql = "INSERT INTO usuario (nome, email, senha, foto, meta) VALUES (:nome, :email, :senha, :foto, :meta)";
    $stmt = $pdo->prepare($sql);

    $stmt->execute([
        ':nome' => $dados['nome'],
        ':email' => $dados['email'],
        ':senha' => password_hash($dados['senha'], PASSWORD_DEFAULT),
        ':foto' => "perfilDefault.png",
        ':meta' => 150
    ]);

    $idUsuario = $pdo->lastInsertId();

    $sqlCasa = "INSERT INTO casa (nome_casa, id_usuario) VALUES (:nome_casa, :id_usuario)";
    $stmtCasa = $pdo->prepare($sqlCasa);
    $stmtCasa->execute([':nome_casa' => 'Minha Casa', ':id_usuario' => $idUsuario]);

    echo json_encode(['message' => 'Cadastro realizado com sucesso', 'cadastrado' => true]);
}
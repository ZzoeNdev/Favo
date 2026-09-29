<?php

include 'cors.php';
include 'conexao.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}

$dados = json_decode(file_get_contents("php://input"), true);

$sql = "SELECT senha FROM usuario WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute([':id' => $_SESSION['user_id']]);
$senhaUsuario = $stmt->fetch();

if (!password_verify($dados['senhaAtual'], $senhaUsuario['senha'])){
    http_response_code(401);
    exit(json_encode('message' => 'Senha atual incorreta'));
}

$novaSenha = password_hash($dados['novaSenha'], PASSWORD_DEFAULT);

$up = "UPDATE usuario SET senha = :senha WHERE id = :id";
$stmtUp = $pdo->prepare($up);
$stmtUp->execute([':senha' = $novaSenha, ':id' = $_SESSION['user_id']]);

echo json_encode('message' => 'Senha atualizda com sucesso');


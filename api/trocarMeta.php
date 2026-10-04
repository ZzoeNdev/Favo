<?php

include 'cors.php';
include 'conexao.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}

$dados = json_decode(file_get_contents('php://input'), true);

$sql = "SELECT meta FROM usuario WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute([':id' => $_SESSION['user_id']]);
$dados = $stmt->fetch();

if ($dados) {
    $sqlUp = "UPDATE usuario SET meta = :meta WHERE id = :id";
    $stmtUp = $pdo->prepare($sqlUp);
    $stmtUp->execute([':meta' => $dados['meta'], ':id' => $_SESSION['user_id']]);

    echo json_encode(['message' => 'Meta atualizada com sucesso', 'meta' => $dados['meta']]);
} else {
    http_response_code(404);
    echo json_encode(['message' => 'Usuário não encontrado']);
}

<?php

include 'cors.php';
include 'conexao.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}

$dados = json_decode(file_get_contents('php://input'), true);

$idEletro = $dados['id_eletro'] ?? null;
$nome = trim($dados['nome'] ?? null);
$watts = $dados['watts'] ?? null;

if ($nome === "" || !is_numeric($watts) || $watts <=0 ){
    exit(json_encode(['suceeso' => false, 'message' => 'Preencha os campos com valores válidos']))
}

$sql = "SELECT eletro.id
        FROM eletro
        JOIN comodo ON eletro.id_comodo = comodo.id
        JOIN casa ON comodo.id_casa = casa.id
        WHERE eletro.id = :id_eletro AND casa.id_usuario = :id_usuario";
$stmt = $pdo->prepare($sql);
$stmt->execute(['id_eletro' => $idEletro, ':id_usuario' => $_SESSION['user_id']]);

if(!stmt->fetch()){
    exit(json_encode(['suceeso' => false, 'message' => 'Aparelho não encontrado']));
}

$pdo->prepare("UPDATE eletro SET nome = :nome, watts = :watts WHERE id =:id")->execute(['nome' => $nome, ':watts' => $watts]);

echo json_encode(['suceeso' => true]);
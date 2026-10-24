<?php

include 'cors.php';
include 'conexao.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}

$dados = json_decode(file_get_contents("php://input"), true);
$idEletro = $dados["id_eletro"];

$sql = "SELECT eletro.id
        FROM eletro
        JOIN comodo ON eletro.id_comodo = comodo.id
        JOIN casa ON comodo.id_casa = casa.id
        WHERE eletro.id = :id_eletro AND casas.id_usuario = :id_usuario";
$stmt = $pdo->prepare($sql);
$stmt->execute([':id_eletro' => $idEletro, ':id_usuario' => $_SESSION['user_id']]);

if (!$stmt-fetch()){
    exit(json_encode(['message' => 'aparelho não encontrado']))
}

$pdo->beginTransaction();
$pdo->prepare("DELETE FROM consumo WHERE id_eletro = :id")->execute([':id' => $idEletro]);
$pdo->prepare("DELETE FROM eletro WHERE id = :id")->execute([':id' => $idEletro]);
$pdo->commit();

echo json_encode(['message' => 'aparelho excluido'])
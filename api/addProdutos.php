<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit();
}

include 'conexao.php';

$dados = json_decode(file_get_contents("php://input"), true);

$sql = "INSERT INTO eletro (nome, tipo, watts, estado) VALUES (:nome, :tipo, :watts, :estado)";
    $stmt = $pdo->prepare($sql);

    $stmt->execute([
        ':nome' => $dados['nome'],
        ':tipo' => $dados['tipo'],
        ':watts' => $dados['watts'],
        ':estado' => $dados['estado']
    ]);

echo json_encode(['message' => 'Cadastro realizado com sucesso']);
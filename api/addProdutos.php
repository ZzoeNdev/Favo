<?php


include 'cors.php';
include 'conexao.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}


$dados = json_decode(file_get_contents("php://input"), true);

$sqlCasa = "SELECT id FROM casa WHERE id_usuario = :id";
$stmtCasa = $pdo->prepare($sqlCasa);
$stmtCasa->execute([':id' => $_SESSION['user_id']]);
$casa = $stmtCasa->fetch();

$confirmComodo = "SELECT id FROM comodo WHERE id_casa = :id_casa AND nome = :nome";
$stmtComodo = $pdo->prepare($confirmComodo);
$stmtComodo->execute([':id_casa' => $casa['id'], ':nome' => $dados['comodo']]);
$comodo = $stmtComodo->fetch();

if ($comodo) {
    $idComodo = $comodo['id'];
}else {
    $sqlComodo = "INSERT INTO comodo (nome, id_casa) VALUES (:nome, :id_casa)";
    $stmtComodo = $pdo->prepare($sqlComodo);
    $stmtComodo->execute([':nome' => $dados['comodo'], ':id_casa' => $casa['id']]);
    $idComodo = $pdo->lastInsertId();
}

$sql = "INSERT INTO eletro (nome, watts, estado, id_comodo, ligado_desde) VALUES (:nome, :watts, :estado, :id_comodo, :ligado_desde)";
    $stmt = $pdo->prepare($sql);

    $stmt->execute([
        ':nome' => $dados['nome'],
        ':watts' => $dados['watts'],
        ':estado' => $dados['estado'],
        ':id_comodo' => $idComodo,
        ':ligado_desde' => date('Y-m-d H:i:s')
    ]);

echo json_encode(['message' => 'Cadastro realizado com sucesso']);
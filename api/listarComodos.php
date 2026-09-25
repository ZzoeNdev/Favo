<?php

include 'cors.php';
include 'conexao.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}

$sql = "SELECT comodo.id, comodo.nome, COUNT(eletro.id) AS qtd_aparelhos
        FROM comodo
        JOIN casa ON comodo.id_casa = casa.id
        LEFT JOIN eletro ON comodo.id = eletro.id_comodo
        WHERE casa.id_usuario = :id_usuario
        GROUP BY comodo.id, comodo.nome";
$stmt = $pdo->prepare($sql);
$stmt->execute([':id_usuario' => $_SESSION['user_id']]);

echo json_encode($stmt->fetchAll());
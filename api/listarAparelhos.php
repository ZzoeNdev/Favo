<?php

include 'cors.php';
include 'conexao.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}

$sql = "SELECT eletro.id, eletro.nome, eletro.watts, eletro.estado, eletro.horas_uso_medio, comodo.nome as nomeComodo
             FROM eletro
             JOIN comodo ON eletro.id_comodo = comodo.id
             JOIN casa ON comodo.id_casa = casa.id
             WHERE casa.id_usuario = :id_usuario";

$stmt = $pdo->prepare($sql);
$stmt->execute([':id_usuario' => $_SESSION['user_id']]);

echo json_encode($stmt->fetchAll()); 

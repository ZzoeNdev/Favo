<?php

include 'cors.php';
include 'conexao.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}

$sql = "SELECT 
            COUNT(*) AS total, 
            SUM(CASE WHEN eletro.estado = 'ligado' THEN 1 ELSE 0 END) AS ativos
            FROM eletro
            JOIN comodo ON eletro.id_comodo = comodo.id
            JOIN casa ON comodo.id_casa = casa.id
            WHERE casa.id_usuario = :id_usuario";

$stmt = $pdo->prepare($sql);
$stmt->execute([':id_usuario' => $_SESSION['user_id']]);
$contagem = $stmt->fetch();

echo json_encode([
    'cadastrados' => $contagem['total'],
    'ativos' => $contagem['ativos']
]);
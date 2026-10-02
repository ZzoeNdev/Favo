<?php

include 'cors.php';
include 'conexao.php';


if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}

session_unset();
session_destroy();

echo json_encode(['logout' => true, 'message' => 'Logout realizado com sucesso']);
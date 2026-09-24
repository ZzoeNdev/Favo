<?php

include 'cors.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    echo json_encode(['logado' => false, 'message' => 'Usuário não autenticado']);
    exit;
}else {
    echo json_encode(['logado' => true, 'message' => 'Usuário autenticado']);
}

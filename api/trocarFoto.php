<?php

include 'cors.php';
include 'conexao.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}

if (!isset($_FILES['foto'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Nenhuma foto']));
}

$extensao = pathinfo($_FILES['foto']['name'], PATHINFO_EXTENSION);
$nomeArquivo = 'usuario_' . $_SESSION['user_id'] . '_' . time() . '.' . $extensao;
$caminhoDestino = 'fotoUsuarios/' . $nomeArquivo;

move_uploaded_file($_FILES['foto']['tmp_name'], $caminhoDestino);

$up = "UPDATE usuario SET foto = :foto WHERE id = :id";
$stmtUp = $pdo->prepare($up);
$stmtUp->execute([':foto' = $nomeArquivo, ':id' = $_SESSION['user_id']]);

echo json_encode(['message' => 'Foto atualizda', 'foto' => $nomeArquivo]);
<?php

include 'cors.php';
include 'conexao.php';

if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    exit(json_encode(['message' => 'Não autenticado']));
}

$dados= json_decode(file_get_contents('php://input'), true);
$ideletro = $dados['id_eletro'];

$sql = "SELECT eletro.watts, eletro.estado, eletro.ligado_desde
        FROM eletro
        JOIN comodo ON eletro.id_comodo = comodo.id
        JOIN casa ON comodo.id_casa = casa.id
        WHERE casa.id_usuario = :id_usuario AND eletro.id = :id_eletro";
$stmt = $pdo->prepare($sql);
$stmt->execute([':id_usuario' => $_SESSION['user_id'], ':id_eletro' => $ideletro]);
$aparelho = $stmt->fetch();

if (!$aparelho) {
    http_response_code(404);
    exit(json_encode(['message' => 'Aparelho não encontrado']));
}

if ($aparelho['estado'] === 'ligado') {
    $hoje = date('Y-m-d');
    $inicioDia = $hoje . ' 00:00:00';
    $novoEstado = 'desligado';
    $agora = date('Y-m-d H:i:s');
    $inicioContagem = max($aparelho['ligado_desde'], $inicioDia);
    $horas = (strtotime($agora) - strtotime($inicioContagem)) / 3600;
    $kwh = ($aparelho['watts'] * $horas) / 1000;

    $sqlBuscarConsumo = "SELECT id FROM consumo WHERE id_eletro = :id_eletro AND data = :data";
    $stmtBuscarConsumo = $pdo->prepare($sqlBuscarConsumo);
    $stmtBuscarConsumo->execute([':id_eletro' => $ideletro, ':data' => $hoje]);
    $consumoExistente = $stmtBuscarConsumo->fetch();

    if ($consumoExistente) {
        $sqlAtualizarConsumo = "UPDATE consumo SET fim = :fim, consumo_kwh = :consumo_kwh WHERE id = :id";
        $stmtAtualizarConsumo = $pdo->prepare($sqlAtualizarConsumo);
        $stmtAtualizarConsumo->execute([':fim' => $agora, ':consumo_kwh' => $kwh, ':id' => $consumoExistente['id']]);
    } else {
        $sqlInserirConsumo = "INSERT INTO consumo (id_eletro, data, inicio, fim, consumo_kwh) VALUES (:id_eletro, :data, :inicio, :fim, :consumo_kwh)";
        $stmtInserirConsumo = $pdo->prepare($sqlInserirConsumo);
        $stmtInserirConsumo->execute([':id_eletro' => $ideletro, ':data' => $hoje, ':inicio' => $inicioContagem, ':fim' => $agora, ':consumo_kwh' => $kwh]);
    }
    
$sqlAtualizarEstado = "UPDATE eletro SET estado = 'desligado', ligado_desde = NULL WHERE id = :id";
$stmtAtualizarEstado = $pdo->prepare($sqlAtualizarEstado);
$stmtAtualizarEstado->execute([':id' => $ideletro]);
} else {
    $sqlAtualizarEstado = "UPDATE eletro SET estado = 'ligado', ligado_desde = :agora WHERE id = :id";
    $stmtAtualizarEstado = $pdo->prepare($sqlAtualizarEstado);
    $stmtAtualizarEstado->execute([':agora' => date('Y-m-d H:i:s'), ':id' => $ideletro]);
    echo json_encode(['message' => 'Aparelho ligado com sucesso']);
}
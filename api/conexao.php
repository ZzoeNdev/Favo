<?php

$host = "localhost";
$banco = "favoteste";
$usuario = "root";
$senha = "";

try{
    $pdo = new PDO("mysql:host=$host;dbname=$banco;charset=utf8", $usuario, $senha);
}catch(PDOException $e){
    die("Erro na conexão: " . $e->getMessage());
}

?>
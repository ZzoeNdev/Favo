<?php

session_start();

$origensPermitidas = [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:5175',
    'http://localhost:5176'
];

$origem = $_SERVER['HTTP_ORIGIN'] ?? '';

if(in_array($origem, $origensPermitidas)){
    header('Access-Control-Allow-Origin: ' . $origem);
}

header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit();
}
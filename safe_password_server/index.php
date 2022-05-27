<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods", "GET, POST");
require_once('vendor'.DIRECTORY_SEPARATOR.'autoload.php');

use Connection\FetchPasword;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$fetchPassword = new FetchPasword;
$resp = $fetchPassword->getPassword();

if($resp[0] === $_POST['clientTry']){
  echo json_encode('Resposta Correta!');
} else {
  echo json_encode('Resposta Errada!');
}


<?php 

namespace Connection;
use PDO;

define('HOST', $_ENV['HOST']);
define('DBNAME', $_ENV['DBNAME']);
define('USER', $_ENV['USER']);
define('PASSWORD', $_ENV['PASSWORD']);

abstract class Connection extends PDO {

  protected $pdo;

  function __construct()
  {
    try{
      $this->pdo = new PDO('mysql:host='.HOST.';dbname='.DBNAME, USER, PASSWORD, []);
    } catch(\PDOException $e){ 
      throw new \PDOException($e->getMessage(), $e->getCode());
    }
  }
}

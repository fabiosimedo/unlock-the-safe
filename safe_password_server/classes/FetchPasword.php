<?php 

namespace Connection;

use Connection\Connection;

class FetchPasword extends Connection{
  protected $response;
  protected $password;
  //protected $comparated;
  
  function getPassword()
  {
    $this->response = $this->pdo->prepare('SELECT senha_cofre FROM senha_table');
    $this->response->execute();
    $this->password = $this->response->fetch();

    return $this->password;
  }

  function comapre()
  {
    if($this->password === $this->comparated)
    {
      //
    }
  }
}

<?php
function connection (){
  try
    {
      $connection = new PDO('mysql:host=localhost;dbname=information_schema', 'root', 'XXXX'); 
    }
  catch (Exception $e)
    {
      die('Erreur : ' . $e->getMessage());
    }
  return ($connection);
}
?>

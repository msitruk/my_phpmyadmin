<?php
ini_set('display_errors', 1);
include_once('php/twig/lib/Twig/Autoloader.php');
include_once('php/models/connection.php');
include_once('php/models/database.php');
$login =  connection();
if(empty($_POST))
{
    Twig_Autoloader::register();

    $loader = new Twig_Loader_Filesystem('templates'); // Dossier contenant les templates
    $twig = new Twig_Environment($loader, array(
      'cache' => false
    ));
    $bases = show_database($login);
    //var_dump($bases);


    $template = $twig->loadTemplate('index.twig');
    echo $template->render(array('bases' => $bases, ));
}
if ($_POST)
{
  var_dump($_POST);
  if ($_POST["action"] == "create")
  {
    insert_database($_POST['basename'], $login);
  }
  else if ($_POST["action"] == "delete")
  {
    delete_database($_POST['basename'], $login);
  }
  else if ($_POST["action"] == "edit")
  {
    rename_database($login, $_POST["newbasename"], $_POST["basename"]);
  }
}
?>

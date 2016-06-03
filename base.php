<?php
ini_set('display_errors', 1);
include_once('php/twig/lib/Twig/Autoloader.php');
include_once('php/models/connection.php');
include_once('php/models/database.php');
include_once('php/models/table.php');
include_once('php/models/table_db.php');
$login =  connection();
if(empty($_POST))
{
  Twig_Autoloader::register();

  $loader = new Twig_Loader_Filesystem('templates'); // Dossier contenant les templates
  $twig = new Twig_Environment($loader, array(
    'cache' => false
  ));

  $db = $_GET["db"];
  //echo $db;
  $tables = show_table_database($login, $db);
  $table_stats = statistics_database($login, $db);
  //$bases = show_database($login);
  //var_dump($table_stats);


  $template = $twig->loadTemplate('basedetail.twig');
  echo $template->render(array(
    'tables' => $table_stats,
    'basename' => $db,
));
}
if ($_POST)
{
  //print_r($_POST["bigtab"]);
  if ($_POST["action"] == "newtable")
  {
     //insert_database($_POST['basename'], $login);
    //var_dump($_POST);
    echo $_GET['db'];
    //db=fgdfg
     add_table($login, $_POST['basename'], $_POST['tablename'], $_POST['bigtab']);
  }
  else if ($_POST["action"] == "delete")
  {
     delete_table($_POST['tablename'], $_POST['basename'], $login);
  }
  // else if ($_POST["action"] == "edit")
  // {
  //   rename_database($login, $_POST["newbasename"], $_POST["basename"]);
  // }
}
?>

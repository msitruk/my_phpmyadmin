<?php
ini_set('display_errors', 1);
include_once('php/twig/lib/Twig/Autoloader.php');
include_once('php/models/connection.php');
include_once('php/models/database.php');
include_once('php/models/table.php');
include_once('php/models/table_db.php');

$login =  connection();
if (empty($_POST))
  {
    Twig_Autoloader::register();
    $loader = new Twig_Loader_Filesystem('templates');
    $twig = new Twig_Environment($loader, array(
						'cache' => false
						));
    $db = $_GET["db"];
    $nbtable = nb_database($login, $db);
    if ($nbtable > 0)
      {
	$table_stats = statistics_database($login, $db);
	$template = $twig->loadTemplate('basedetail.twig');
	echo $template->render(array(
				     'tables' => $table_stats,
				     'basename' => $db,
				     ));
      }
    else
    {
      $template = $twig->loadTemplate('basedetail.twig');
      echo $template->render(array(
				   'basename' => $db,
				   ));
    }
  }
if ($_POST)
  {
    if ($_POST["action"] == "newtable")
      {
	echo $_GET['db'];
	add_table($login, $_POST['basename'], $_POST['tablename'], $_POST['bigtab']);
      }
    else if ($_POST["action"] == "delete")
      {
	delete_table($_POST['tablename'], $_POST['basename'], $login);
      }
    else if ($_POST["action"] == "purge")
      {
	empty_table($login, $_POST['basename'], $_POST['tablename']);
      }
  }
?>

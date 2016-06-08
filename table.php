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
    $table = $_GET["table"];
    $tables = show_table_database($login, $db);
    $table_stats = statistics_database($login, $db);
    $fields = list_table($login,$db, $table);
    $lignes = show_table($login, $db, $table);
    $primary = search_primary($login, $db, $table);
    $template = $twig->loadTemplate('tabledetail.twig');
    echo $template->render(array(
				 'table_name' => $table,
				 'fields' => $fields,
				 'lignes' => $lignes,
				 'basename' => $db,
				 'primary' => $primary,
				 ));
  }
else if ($_POST)
  {
    if ($_POST["action"] == "editField")
      {
	edit_element($login, $_POST['basename'], $_POST['tablename'], $_POST['fieldname'], $_POST['newdata']);
      }
    else if ($_POST["action"] == "deleteField")
      {
        delete_element($login, $_POST['basename'], $_POST['tablename'], $_POST['fieldname']);
      }
    else if ($_POST["action"] == "newField")
      {
	add_element($login, $_POST['basename'], $_POST['tablename'], $_POST['newdata']);
      }
    else if ($_POST["action"] == "newPrimary")
      {
        add_primaryKey($login, $_POST['basename'], $_POST['tablename'], $_POST['newPrimary']);
      }
  }
?>

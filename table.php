<?php
ini_set('display_errors', 1);
    include_once('php/twig/lib/Twig/Autoloader.php');
    include_once('php/controller/connection.php');
    include_once('php/controller/database.php');

    Twig_Autoloader::register();

    $loader = new Twig_Loader_Filesystem('templates'); // Dossier contenant les templates
    $twig = new Twig_Environment($loader, array(
      'cache' => false
    ));



    $login =  connection();


    $db = $_GET["db"];
    $table = $_GET["table"];
    //echo $db;
    $tables = show_table_database($login, $db);
    $table_stats = statistics_database($login, $db);
    //$bases = show_database($login);
    //var_dump($table_stats);


    $template = $twig->loadTemplate('tabledetail.twig');
    echo $template->render(array(
      'table_name' => $table,
      'tables' => $table_stats,
      'basename' => $db,
));
?>

<?php
ini_set('display_errors', 1);
include_once('php/twig/lib/Twig/Autoloader.php');
include_once('php/models/connection.php');
include_once('php/models/freequery.php');

$login =  connection();

if(empty($_POST))
{
	Twig_Autoloader::register();
	$loader = new Twig_Loader_Filesystem('templates'); // Dossier contenant les templates
	$twig = new Twig_Environment($loader, array(
	'cache' => false
	));
	$template = $twig->loadTemplate('query.twig');
	echo $template->render(array(
	// 'tables' => $table_stats,
	// 'basename' => $db,
	));
}
else if ($_POST["sql"])
{
	$retour = free_request($login, $_POST["sql"]);

	//$retour =  array_values($retour);
	//var_dump($retour);
	Twig_Autoloader::register();
	$loader = new Twig_Loader_Filesystem('templates'); // Dossier contenant les templates
	$twig = new Twig_Environment($loader, array(
	'cache' => false
	));
	$template = $twig->loadTemplate('query.twig');
	echo $template->render(array(
	'results' => $retour,
	// 'basename' => $db,
	));
}
?>

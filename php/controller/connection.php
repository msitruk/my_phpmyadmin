<?php
function connection (){
	try
{
	$connection = new PDO('mysql:host=localhost;dbname=etna_tp', 'root', 'pf69ppyo');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}
	return ($connection);
}

?>

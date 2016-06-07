<?php
function connection (){
	try
{
	$connection = new PDO('mysql:host=localhost;', 'root', 'pf69ppyo', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}
	return ($connection);
}

?>

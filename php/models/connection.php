<?php
function connection (){
	try
{
<<<<<<< HEAD
	$connection = new PDO('mysql:host=localhost;', 'root', 'pf69ppyo', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
=======
	$connection = new PDO('mysql:host=localhost;dbname=information_schema', 'root', 'XXXX');
>>>>>>> beaefb40fd2a855bad55834654f1cc94d0119e4c
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}
	return ($connection);
}

?>

<?php
function connection (){
	$connection = new PDO('mysql:host=localhost;dbname=test', 'root', '');       
	return ($connection);
}

?>


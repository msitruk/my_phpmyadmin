<?php
require("connection.php");
function show_database($connection)
{
	$sql = 'SHOW DATABASES';
	$req = $connection->query($sql);
	while ($row = $req->fetch())
	{
    	echo $row[0], '<br/>';
	}	
	$req->closeCursor();
}   

function insert_database($name_database, $connection){
	$var = "`CREATE DATABASE`";
	$Var = "$var $name_database";
	try 
	{
	  $connection->exec($Var);
      echo "Database created successfully<br>";
	}
	catch (PDOException $e)
	{
		echo "No Create";
	}

function delete_database($name_database, $connection){
	
	$sql = "DROP DATABASE $name_database";
	try 
	{
	  $req1 = $connection->query($sql);
      echo "Database deleted successfully<br>";
	}
	catch (PDOException $e)
	{
		echo "Delete Database failed";
	}
}

//cree une base de donnée

$name_database = "test2"; // nom de la base testé
insert_database($name_database, $connection);

//delete une base de donnée
delete_database($name_database,  $connection);


?>

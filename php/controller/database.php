<?php
function show_database($connection)
{
	$sql = 'SHOW DATABASES';
	$req = $connection->query($sql);
	$bases = array();
	$i = 0;
	// $row = $req->fetchAll();
	while ($row = $req->fetch())
	{
			//echo $row[0], '<br/>';
			$bases["base".$i] = $row[0];
			$i = $i + 1;
	}
	$req->closeCursor();
	return ($bases);
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

function rename_database($connection, $new_name, $old_name)
{
	$sql = "CREATE DATABASE IF NOT EXISTS $new_name default CHARACTER set utf8 COLLATE utf8_general_ci; DROP DATABASE $old_name";
	try
	{
		$req = $connection->query($sql);
		echo "Database rename successfully";
	}
	catch (PDOException $e)
	{
		echo "rename database failed";
	}
}

// //create database
//
// $name_database = "test2"; // nom de la base testé
// insert_database($name_database, $connection);
//
// //delete database
// delete_database($name_database,  $connection);
//
// //edit database
// rename_database($connection, "sucess", "test2");

?>

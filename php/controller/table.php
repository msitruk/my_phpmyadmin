<?php
require("connection.php");

function list_table($connection, $table)
{
	$sql = "Select * from $table";
	$req = $connection->query($sql);
	$bases = array();
	$i = 0;
	while ($row = $req->fetch())
	{
			$bases["base".$i] = $row[0];
			$i = $i + 1;
	}
	$req->closeCursor();
	return ($bases);
}

function delete_database($table, $connection){
	
	$sql = "DROP TABLE $table";
	try 
	{
	  $connection->query($sql);
      echo "Database deleted successfully<br>";
	}
	catch (PDOException $e)
	{
		echo "Delete Database failed";
	}
}

function nb_column ($connection, $db,  $table)
{

	$i = 0;
	$sql = "select * from information_schema.columns where table_schema = '"."$db"."' and table_name= '"."$table"."' ";
	try
	{
		$req = $connection->query($sql);
	}
	catch (PDOException $e)
	{
		echo "Show table of database failed";
	}
	while ($row = $req->fetch())
	{
			$tables["table".$i] = $row[0];
			$i = $i + 1;
	}
	$req->closeCursor();
	echo $i;
	return ($i);
}


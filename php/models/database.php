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
	$sql = "CREATE DATABASE ".$name_database;
	try
	{
	  $connection->exec($sql);
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

function show_table_database($connection, $name_database)
{
	$i = 0;
	$sql = "select table_name from information_schema.tables where TABLE_SCHEMA='".$name_database."'";
	try
	{
		$req = $connection->query($sql);
		//echo "Database show table successfully";
	}
	catch (PDOException $e)
	{
		echo "Show table of database failed";
	}
	while ($row = $req->fetch())
	{
			//echo $row[0], '<br/>';
			$tables["table".$i] = $row[0];
			$i = $i + 1;
	}
	$req->closeCursor();
	return ($tables);
}

function nb_database($connection, $name_database)
{
	$i = 0;
	$sql = "select table_name from information_schema.tables where TABLE_SCHEMA='".$name_database."'";
	try
	{
		$req = $connection->query($sql);
		//echo "Database show table successfully";
	}
	catch (PDOException $e)
	{
		echo "Show table of database failed";
	}
	while ($row = $req->fetch())
	{
			//echo $row[0], '<br/>';
			$tables["table".$i] = $row[0];
			$i = $i + 1;
	}
	$req->closeCursor();
	return ($i);
}

function statistics_database($connection, $name_database)
{
	$i = 1;
	$sql = "select table_name, data_length, CREATE_time from information_schema.tables where TABLE_SCHEMA='".$name_database."'";

	try
	{
		$req = $connection->query($sql);
		//echo "Database show table successfully";
	}
	catch (PDOException $e)
	{
		echo "statistics  database failed";
	}
	while ($row = $req->fetch())
	{
			//echo $row[0], '<br/>';
			$tables[$i]["tableName"] = $row[0];
			$tables[$i]["tableLenght"] = $row[1];
			$tables[$i]["tableDate"] = $row[2];
			$i = $i + 1;
	}
	$req->closeCursor();
	return ($tables);
}

?>
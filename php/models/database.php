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

function list_table_database($connection, $name_database)
{
    $i = 0;
    $sql = "select table_name from information_schema.tables where TABLE_SCHEMA='".$name_database."'";
    $tables = array();
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

function rename_database($new_name, $old_name)
{

    $connection = new PDO('mysql:host=localhost;dbname='.$old_name.'', 'root', 'pf69ppyo');
    $sql = "CREATE DATABASE $new_name; ";
    $req = $connection->query($sql);
    //echo "Database rename successfully";
    $nb_db = nb_database($connection, $old_name);
    //echo $nb_db;
    $i = 0;
    $sql2 =  "RENAME TABLE ";

    $connection->query($sql);

    $listdb = list_table_database($connection, $old_name);
    //var_dump($listdb);
    while ($i < ($nb_db - 1))
    {
        $sql2 = $sql2."$old_name.".$listdb['table'.$i]." TO $new_name.".$listdb['table'.$i]. " , ";
        $i = $i + 1;
    }
    $end = end($listdb);
    $sql2 = $sql2 .$end." TO $new_name.".$listdb['table'.$i]."; DROP DATABASE ".$old_name.";";
    //$sql = $sql.$sql2;
    //echo $sql2;
     try
    {
        $connection->query($sql2);

        echo "Database show table successfully";
    }
    catch (PDOException $e)
    {
        echo "Failed";
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

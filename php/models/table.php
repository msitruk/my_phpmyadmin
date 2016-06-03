<?php

function list_table($connection,$base, $table)
{
	$sql = "select column_name, column_type from information_schema.columns where table_schema = '$base' and table_name= '$table'";
	$req = $connection->query($sql);
	$field = array();
	$i = 0;
	while ($row = $req->fetch())
	{
			$field[$i]["Name"] = $row[0];
			$field[$i]["Type"] = $row[1];
			$i = $i + 1;
	}
	$req->closeCursor();
	return ($field);
}

function delete_table($table, $basename, $connection){

	$sql = "DROP TABLE $basename.$table";
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

function nb_column($connection, $db,  $table)
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
	//echo $i;
	return ($i);
}

function show_table($connection, $base, $table)
{
	$sql ="SELECT * FROM $base".".$table";
	$req = $connection->query($sql);
	$lignes = array();
	$i = 0;
	$j = nb_column($connection, $base, $table);
	//echo $j;
	while ($row = $req->fetch(PDO::FETCH_ASSOC))
	{
		$h = 0;
		foreach ($row as $value) {
			$lignes[$i][$h] = $value;
			$h = $h + 1;
		}
		$i = $i + 1;
	}

	$req->closeCursor();
	return ($lignes);
}

/*crée la requete d'insertion
*le $table est le tableau que tu récupéras depuis ton formulaire
*/
function insert_table($connection, $db, $table)
{
    $column = nb_column($connection, $db, $table);
    $array_column = list_column($connection, $table);
    $sql = "INSERT INTO $table VALUES (' ";
    $str = implode("','",$array_column);
    $sql = $sql.$str."')";
    return ($sql);
}

//liste les colonnes que tu peux récuperer dans ton front
function list_column($connection, $table)
{
    //lister les colonnes
    $sql = "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = '"."$table"."' ";
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
    return($bases);
}

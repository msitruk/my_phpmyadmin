<?php
require("connection.php");

function list_table($connection, $table)
{
	$sql = "Select * from $table";
	try
	{
		$req = $connection->query($sql);
		echo"success ..";
	}
	catch (PDOException $e)
	{
		echo "statistics  database failed";
	}
}

function insert_into($connection, $table)
{
	
}
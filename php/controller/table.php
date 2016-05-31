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

function insert_into($connection, $table)
{
	
}

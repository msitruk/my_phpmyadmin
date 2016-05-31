<?php


function rename_table($connection, $name_database, $old_table, $new_table)
{
	$sql = "RENAME TABLE $name_database."."$old_table  TO $name_database."."$new_table";
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

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

$connection = connection();

show_database($connection);

?>
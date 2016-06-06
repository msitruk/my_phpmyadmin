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

//Suppression d?un élément de la structure de la table
function delete_element($connection, $name_database, $table, $element)
{
    $sql = "ALTER TABLE $name_database."."$table DROP $element";
    $nb = nb_column ($connection, $name_database,  $table);
    echo $sql.'</br>';
    try
    {
        if ($nb != 1)
        {
          $req1 = $connection->query($sql);
          echo " Success<br>";
        }
        else
        {
            echo "Vous ne pouvez effacer tous les champs avec ALTER TABLE. Utilisez DROP TABLE";
        }
    }
    catch (PDOException $e)
    {
        echo "Failed";
    }
}

function add_table($connection, $name_database, $name_table, $array)
{
    $arraystr = test_PrimaryKey($array);
    var_dump($arraystr);
    $nb_array = count($arraystr);
    $s = "CREATE TABLE $name_database.$name_table (";
    for ($i = 0; $i < $nb_array; $i++)
    {
        $str = implode(" ",$arraystr[$i]);
        if ($i != ($nb_array - 1))
        {
            $s = $s.$str." , ";
        }
        else
        {
            $s = $s.$str;
        }
    }
    $s= $s.")";
    echo $s;
    try
    {
        $req = $connection->query($s);
        echo"success ..";
    }
    catch (PDOException $e)
    {
        echo "create table failed";
    }
}

function test_PrimaryKey ($array)
{
    $nb_array = count($array);
    for ($x = 0; $x != $nb_array; $x++)
    {
        $element = in_array("AUTO_INCREMENT", $array[$x]);
        $i_AI = array_search("id", $array[$x]);
        if ($element == true )
        {
            $tab = array();
            $tab['primary'] = "PRIMARY KEY (".$array[$x]['fieldName'].")";
            array_push($array, $tab);
        }
    }
    return($array);
}

function empty_table($connection, $name_database, $name_table)
{
    $sql = "TRUNCATE TABLE $name_database.$name_table";
    try{
        $req = $connection->query($sql);
        echo ("Sucess ");
    }
    catch (PDOException $e)
    {
        echo "Failed ...";
    }
}

function edit_element($connection, $name_database, $name_table, $name_element, $array)
{
    $nb_array = count($array);
    $sql = "ALTER TABLE $name_database.$name_table CHANGE $name_element ";

    for ($i = 0; $i < $nb_array; $i++)
    {
        if ($i != ($nb_array - 1))
        {
            $sql = $sql.$array[$i]." ";
        }
        else
        {
            $sql = $sql.$array[$i];
        }
    }
    echo $sql."</br>";
    try
    {
        $req = $connection->query($sql);
        echo"success ..";
    }
    catch (PDOException $e)
    {
        echo "Alter table failed";
    }
}

function add_element($connection, $db, $table, $array)
{
    $sql = "ALTER TABLE $db.$table ADD ";
    $array = array_filter($array);
    $array =  array_values($array);
    //var_dump($array);
    $nb_array = count($array);
    $i = 0;
    while ( $i < $nb_array)
    {
        if ($array[0] <> true)
        {
            $sql = $sql." ' ".$array[0]." ' ";
        }
        else
        {
            $sql = $sql.$array[$i]." ";
        }
        $i = $i + 1;
    }
    echo $sql ;
    try
    {
        $req = $connection->query($sql);
        echo "Insertion sucess";
    }
    catch (PDOException $e)
    {
        echo "Insertion failed";
    }
}

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


function add_data($connection, $db, $table, $array)
{
    $sql = "Insert into $db.$table values (";
    $nb_array = count($array);
    $i = 0;
    while ( $i < ($nb_array - 1))
    {
        if ($array[0] <> true)
        {
            $sql = $sql." ' NULL ' , ";
        }
        else
        {
            $sql = $sql."'".$array[$i]." ' , ";
        }
        $i = $i + 1;
    }
    $end_array = end($array);
    $sql = $sql."'".$end_array."')";
    echo $sql ;
    try
    {
        $req = $connection->query($sql);
        echo "Insertion sucess";
    }
    catch (PDOException $e)
    {
        echo "Insertion failed";
    }
}

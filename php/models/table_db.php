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
    $sql = "TRUNCATE TABLE $name_databa se.$name_table";
    try{
        $req = $connection->query($sql);
        echo ("Sucess ");
    }
    catch (PDOException $e)
    {
        echo "Failed ...";
    }
}

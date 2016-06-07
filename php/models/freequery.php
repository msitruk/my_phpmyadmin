<?php
function free_request($connection, $request)
    $sth = $link->prepare($request);
    $sth->execute();
    $return = array();
       if (!$sth->execute())
       {
         $return = ($sth->errorInfo());
       }
   else
   {
        $result = $sth->fetchAll(PDO::FETCH_ASSOC);
        $return = $result;
        if (empty($return))
        {
            $return = ("Requête effectuée.");
        }
   }
   return ($return);
}

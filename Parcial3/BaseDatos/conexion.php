<?php

    $servername="ADRIAN\SERVIDOR";
    $conexion=array("Database"=>"Escuela",
                    "UID"=>"sa",
                    "PWD"=>"torres12",
                    "CharacterSet"=>"UTF-8");
    $con=sqlsrv_connect($servername,$conexion);
    
?>
<?php
include "Conectar.php";

try{
    $query=$con->prepare("Select * from Cita");
    $query-> execute();

        while($row = $query->fetch()){
            echo $row['ID'].'-'.
                 $row['Fecha'].'-'.
                 $row['Hora'].'-'.
                 $row['Nombre'].'-'.
                 $row['Apellido_Paterno'].'-'.
                 $row['Apellido_Materno'].'-'.
                 $row['Direccion'].'-'.
                 $row['Colonia'].'-'.
                 $row['Codigo_Postal'].'-'.
                 $row['Email'].'-'.
                 $row['Telefono'].'-'.
                 $row['Ciudad'].'-'.
                 $row['Estado'].'<br>';
        }
        $query->closeCursor();
}catch(PDOExcepction $e){
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}
?>


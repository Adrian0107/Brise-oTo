<?php
$Fecha=$_POST['Fe'];
$Hora=$_POST['Ho'];
$Nombre=$_POST['Nom'];
$Paterno=$_POST['Pat'];
$Materno=$_POST['Mat'];
$Direccion=$_POST['Dir'];
$Colonia=$_POST['Col'];
$Codigo=$_POST['Cod'];
$Email=$_POST['Em'];
$Telefono=$_POST['Tel'];
$Ciudad=$_POST['Ciu'];
$Estado=$_POST['Est'];
$hostname='localhost';
$database= 'L19100152';
$username= 'root';
$password='';

try{
    $con = new PDO("mysql:host=$hostname; dbname=$database" ,$username,$password);
} catch (PDOExcepction $e){
    echo "Error en la conexion a la base de datos";
    echo $e ->getMessage();
    exit();
}

//$con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
try{
    $consultaSql = "Insert into cita (Fecha, Hora, Nombre, Apellido_Paterno, Apellido_Materno, Direccion, Colonia, Codigo_Postal, Email, Telefono, Ciudad, Estado)
                    VALUES ('$Fecha','$Hora','$Nombre','$Paterno','$Materno','$Direccion','$Colonia','$Codigo','$Email','$Telefono','$Ciudad','$Estado')" ;
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $consulta->closeCursor();
} catch (PDOException $e){
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}
?>
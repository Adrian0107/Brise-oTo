<?php
include("conexion.php");

$nombre=$_POST["nombre"];
$contraseña=$_POST["pass"];

$query="INSERT INTO USUARIO (Nombre, Contraseña) VALUES('$nombre','$contraseña')";
$res=sqlsrv_prepare($con,$query);

if (sqlsrv_execute($res)) {
    echo "Datos ingresados de manera correcta";
} else{
    echo "Error al insertar datos";
}

?>
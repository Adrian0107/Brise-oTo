<?php
$hostname='localhost';
$database= 'L19100152';
$username= 'root';
$password='';

try{
    $con = new PDO("mysql:host=$hostname;dbname=$database",$username,$password);
} catch (PDOExcepction $e){
    echo "Error en la conexion a la base de datos";
    echo $e ->getMessage();
    exit();
}

$con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>
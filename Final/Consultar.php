<?php
$paridCte=$POST['par1'];
$hostname='localhost';
$database= 'L19100152';
$username= 'root';
$password='';
$port='3306';

try{
    $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);
} catch (PDOExcepction $e){
    echo "Error en la conexion a la base de datos";
    echo $e ->getMessage();
    exit();
}

//$con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
try{
    $consultaSql="select * from Cita where ID=".$paridCte;
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta ->closeCursor();
} catch (PDOException $e){
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}
echo json_encode($resultado);
?>
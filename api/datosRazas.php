<?php
//Se realiza la conexion
require_once "conexion.php";
$conexion = new Conexion();
//realiza la consulta
$consulta = "SELECT id, raza FROM razas ORDER BY raza ASC;";
//retorna los datos
$datos = $conexion->retornarDatos($consulta);
//los convierte en una lista
$razas = array();
while ($fila = mysqli_fetch_object($datos)){
    $razas[] = $fila;
}
echo json_encode($razas);//recibe javascript(ajax) con formato json

?>
<?php
require_once("Empleado.php");
$funcion = $_POST["funcion"];

switch ($funcion) {
    case "guardar":
        $emp = new Empleado(
            $_POST["paterno"],
            $_POST["materno"],
            $_POST["nombre"],
            $_POST["sexo"],
            $_POST["fechaNacimiento"],
            $_POST["numEmpleado"],
            $_POST["numPension"],
            $_POST["fotografia"],
            $_POST["curp"],
            $_POST["rfc"],
            $_POST["estadoCivil"],
            $_POST["tipoSangre"],
            $_POST["estatura"],
            $_POST["peso"],
            $_POST["complexion"],
            $_POST["tipoDiscapacidad"],
            $_POST["pais"],
            $_POST["estado"],
            $_POST["municipio"],
            $_POST["localidad"],
            $_POST["colonia"],
            $_POST["codigoPostal"],
            $_POST["tipoVialidad"],
            $_POST["vialidad"],
            $_POST["numExterior"],
            $_POST["numInterior"]
        );
        $emp->generarJson(
            $_POST["id"],
            $_POST["estudios"]
        );
        break;
    case "obtener":
        obtenerJson($_POST["id"]);
        break;
}

function obtenerJson($id)
{
    $txt = fopen($id . ".txt", "r");
    while (!feof($txt)) {
        echo fgets($txt);
    }
    fclose($txt);
}

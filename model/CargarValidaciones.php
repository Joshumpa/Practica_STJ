<?php
require_once("Empleado.php");
require_once("Estudio.php");
$funcion = $_POST["funcion"];
switch ($funcion) {
    case "estudios":
        $estudio = new Estudio(
            $_POST["escuela"],
            $_POST["grado"],
            $_POST["inicio"],
            $_POST["fin"]
        );
        $estudio->validarEstudio();
        break;
    case "empleado":
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
        $emp->validarEmpleado();
        break;
}

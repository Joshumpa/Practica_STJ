<?php
require_once("Validaciones.php");
class Empleado
{
    var $paterno;
    var $materno;
    var $nombre;
    var $sexo;
    var $fechaNacimiento;
    var $numEmpleado;
    var $numPension;
    var $fotografia;
    var $curp;
    var $rfc;
    var $estadoCivil;
    var $tipoSangre;
    var $estatura;
    var $peso;
    var $complexion;
    var $discapacidad;
    var $pais;
    var $estado;
    var $municipio;
    var $localidad;
    var $colonia;
    var $codigoPostal;
    var $tipoVialidad;
    var $vialidad;
    var $numExterior;
    var $numInterior;

    function __construct(
        $_paterno,
        $_materno,
        $_nombre,
        $_sexo,
        $_fechaNacimiento,
        $_numEmpleado,
        $_numPension,
        $_fotografia,
        $_curp,
        $_rfc,
        $_estadoCivil,
        $_tipoSangre,
        $_estatura,
        $_peso,
        $_complexion,
        $_discapacidad,
        $_pais,
        $_estado,
        $_municipio,
        $_localidad,
        $_colonia,
        $_codigoPostal,
        $_tipoVialidad,
        $_vialidad,
        $_numExterior,
        $_numInterior
    ) {
        $this->paterno           = $_paterno;
        $this->materno            = $_materno;
        $this->nombre             = $_nombre;
        $this->sexo               = $_sexo;
        $this->fechaNacimiento    = $_fechaNacimiento;
        $this->numEmpleado        = $_numEmpleado;
        $this->numPension         = $_numPension;
        $this->fotografia         = $_fotografia;
        $this->curp               = $_curp;
        $this->rfc                = $_rfc;
        $this->estadoCivil        = $_estadoCivil;
        $this->tipoSangre         = $_tipoSangre;
        $this->estatura           = $_estatura;
        $this->peso               = $_peso;
        $this->complexion         = $_complexion;
        $this->discapacidad       = $_discapacidad;
        $this->pais               = $_pais;
        $this->estado             = $_estado;
        $this->municipio          = $_municipio;
        $this->localidad          = $_localidad;
        $this->colonia            = $_colonia;
        $this->codigoPostal       = $_codigoPostal;
        $this->tipoVialidad       = $_tipoVialidad;
        $this->vialidad           = $_vialidad;
        $this->numExterior        = $_numExterior;
        $this->numInterior        = $_numInterior;
    }

    public function validarEmpleado()
    {
        $valida = new Validaciones();
        $errores = array();
        if (!$valida->validarCampoVacio($this->paterno)) {
            array_push($errores, "El campo apellido paterno es requerido");
        }
        if (!$valida->validarCampoVacio($this->materno)) {
            array_push($errores, "El campo apellido materno es requerido");
        }
        if (!$valida->validarCampoVacio($this->nombre)) {
            array_push($errores, "El campo nombre es requerido");
        }
        if (!$valida->validarCampoVacio($this->sexo)) {
            array_push($errores, "El campo sexo es requerido");
        }
        if (!$valida->validarCampoVacio($this->fechaNacimiento)) {
            array_push($errores, "el campo fecha de nacimiento es requerido");
        }
        if (!$valida->validarCampoVacio($this->numEmpleado)) {
            array_push($errores, "el número de empleado de nacimiento es requerido");
        }
        if (!$valida->validarCampoVacio($this->curp)) {
            array_push($errores, "el curp es requerido");
        }
        if (!$valida->validarCurp($this->curp)) {
            array_push($errores, "el campo curp debe ser llenado correctamente");
        }
        if (!$valida->validarCampoVacio($this->rfc)) {
            array_push($errores, "el rfc es requerido");
        }
        if (!$valida->validarRfc($this->rfc)) {
            array_push($errores, "el rfc debe ser llenado correctamente");
        }
        if (!$valida->validarCampoVacio($this->estadoCivil)) {
            array_push($errores, "el campo estado civil es requerido");
        }
        if (!$valida->validarCampoVacio($this->tipoSangre)) {
            array_push($errores, "el campo tipo de sangre es requerido");
        }
        if (!$valida->validarCampoVacio($this->estatura)) {
            array_push($errores, "el campo estatura es requerido");
        }
        if (!$valida->validarCampoVacio($this->peso)) {
            array_push($errores, "el campo peso es requerido");
        }
        if (!$valida->validarCampoVacio($this->complexion)) {
            array_push($errores, "el campo complexion es requerido");
        }
        if (!$valida->validarCampoVacio($this->pais)) {
            array_push($errores, "el campo país es requerido");
        }
        if (!$valida->validarCampoVacio($this->estado)) {
            array_push($errores, "el campo estado es requerido");
        }
        if (!$valida->validarCampoVacio($this->municipio)) {
            array_push($errores, "el campo municipio es requerido");
        }
        if (!$valida->validarCampoVacio($this->localidad)) {
            array_push($errores, "el campo localidad es requerido");
        }
        if (!$valida->validarCampoVacio($this->colonia)) {
            array_push($errores, "el campo colonia es requerido");
        }
        if (!$valida->validarCampoVacio($this->codigoPostal)) {
            array_push($errores, "el campo codigo postal es requerido");
        }
        if (!$valida->validarCodigoPostal($this->codigoPostal)) {
            array_push($errores, "el campo codigo postal debe ser llenado correctamente");
        }
        if (!$valida->validarCampoVacio($this->tipoVialidad)) {
            array_push($errores, "el campo tipo de vialidad es requerido");
        }
        if (!$valida->validarCampoVacio($this->vialidad)) {
            array_push($errores, "el campo vialidad es requerido");
        }
        if (!$valida->validarCampoVacio($this->numExterior)) {
            array_push($errores, "el campo numero exterior es requerido");
        }
        echo json_encode($errores);
    }

    public function generarJson($id, $estudios)
    {
        $json = array(
            "id" => $id,
            "paterno" => $this->paterno,
            "materno" => $this->materno,
            "nombre" => $this->nombre,
            "sexo" => $this->sexo,
            "fechaNacimiento" => $this->fechaNacimiento,
            "numEmpleado" => $this->numEmpleado,
            "numPension" => $this->numPension,
            "fotografia" => $this->fotografia,
            "curp" => $this->curp,
            "rfc" => $this->rfc,
            "estadocivil" => $this->estadoCivil,
            "tipoSangre" => $this->tipoSangre,
            "estatura" => $this->estatura,
            "peso" => $this->peso,
            "complexion" => $this->complexion,
            "discapacidad" => $this->discapacidad,
            "pais" => $this->pais,
            "estado" => $this->estado,
            "municipio" => $this->municipio,
            "localidad" => $this->localidad,
            "colonia" => $this->colonia,
            "codigoPostal" => $this->codigoPostal,
            "tipoVialidad" => $this->tipoVialidad,
            "vialidad" => $this->vialidad,
            "numExterior" => $this->numExterior,
            "numInterior" => $this->numInterior,
            "estudios" => $estudios,
        );
        $this->guardarTxt($json, $id);
    }
    public function guardarTxt($json, $id)
    {
        $file = fopen($id . ".txt", "w");
        fwrite($file, json_encode($json) . PHP_EOL);
        fclose($file);
    }
}

<?php
require_once("Validaciones.php");

class Estudio
{
    var $escuela;
    var $grado;
    var $inicio;
    var $fin;
    function __construct($_escuela, $_grado, $_inicio, $_fin)
    {
        $this->escuela  = $_escuela;
        $this->grado    = $_grado;
        $this->inicio   = $_inicio;
        $this->fin      = $_fin;
    }

    public function validarEstudio()
    {
        $errores = array();
        $valida = new Validaciones();
        if (!$valida->validarCampoVacio($this->escuela)) {
            array_push($errores, "El campo escuela es requerido");
        }
        if (!$valida->validarCampoVacio($this->grado)) {
            array_push($errores, "El campo grado de estudio es requerido");
        }
        if (!$valida->validarCampoVacio($this->inicio)) {
            array_push($errores, "El campo fecha de inicio es requerido");
        }
        if (!$valida->validarCampoVacio($this->fin)) {
            array_push($errores, "El campo fecha fin es requerido");
        }
        echo json_encode($errores);
    }
}

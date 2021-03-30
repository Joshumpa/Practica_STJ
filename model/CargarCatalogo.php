<?php
require_once("Catalogo.php");
$funcion = $_GET["funcion"];
$cat = new Catalogo();
switch ($funcion) {
    case "estadoCivil":
        $res = $cat->GetCatEstadoCivil();
        break;
    case "Sexo":
        $res = $cat->GetCatSexo();
        break;
    case "tipoSangre":
        $res = $cat->GetCatTipoSangre();
        break;
    case "complexion":
        $res = $cat->GetCatComplexion();
        break;
    case "discapacidad":
        $res = $cat->GetCatDsicapacidad();
        break;
    case "pais":
        $res = $cat->GetCatPais();
        break;
    case "estado":
        $pais = $_GET["pais"];
        $res = [];
        $temp = $cat->GetCatEstado();
        for ($i = 0; $i < count($temp); $i++) {
            if ($temp[$i]["IdCatPais"] == $pais) {
                array_push($res,  $temp[$i]);
            }
        }
        break;
    case "municipio":
        $pais = $_GET["pais"];
        $estado = $_GET["estado"];
        $res = [];
        $temp = $cat->GetCatMunicipio();
        for ($i = 0; $i < count($temp); $i++) {
            if ($temp[$i]["IdCatPais"] == $pais && $temp[$i]["IdCatEstado"] == $estado) {
                array_push($res,  $temp[$i]);
            }
        }
        break;
    case "localidad":
        $pais = $_GET["pais"];
        $estado = $_GET["estado"];
        $municipio = $_GET["municipio"];
        $res = [];
        $temp = $cat->GetCatLocalidad();
        for ($i = 0; $i < count($temp); $i++) {
            if ($temp[$i]["IdCatPais"] == $pais && $temp[$i]["IdCatEstado"] == $estado && $temp[$i]["IdCatMunicipio"] == $municipio) {
                array_push($res,  $temp[$i]);
            }
        }
        break;
    case "colonia":
        $pais = $_GET["pais"];
        $estado = $_GET["estado"];
        $municipio = $_GET["municipio"];
        $localidad = $_GET["localidad"];
        $res = [];
        $temp = $cat->GetCatColonia();
        for ($i = 0; $i < count($temp); $i++) {
            if (
                $temp[$i]["IdCatPais"] == $pais
                && $temp[$i]["IdCatEstado"] == $estado
                && $temp[$i]["IdCatMunicipio"] == $municipio
                && $temp[$i]["IdCatLocalidad"] == $localidad
            ) {
                array_push($res,  $temp[$i]);
            }
        }
        break;
}

$res = json_encode($res);
echo $res;
<?php
class Validaciones
{
    public function validarCampoVacio($valor): bool
    {
        $res = true;
        if ($valor == "") {
            $res = false;
        }
        return $res;
    }
    public function validarFecha($valor): bool
    {
        $res = true;
        if (!preg_match('/^[0-9]{5}$/i', $valor)) {
            $res = false;
        }
        return $res;
    }
    public function validarCodigoPostal($valor): bool
    {
        $res = true;
        if (!preg_match('/^[0-9]{5}$/i', $valor)) {
            $res = false;
        }
        return $res;
    }

    public function validarCurp($valor): bool
    {
        $res = true;
        if (!preg_match('/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/', $valor)) {
            $res = false;
        }
        return $res;
    }

    public function validarRfc($valor): bool
    {
        $res = true;
        if (!preg_match('/^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/', $valor)) {
            $res = false;
        }
        return $res;
    }
}

var pais = 1;
var estado;
var municipio;
var localidad = 1;
var estudios = [];
var empleado = [];
var id;

$(document).ready(function () {
    cargarMascarasForm();
    cargarSelectSexo();
    cargarSelectEstadoCivil();
    cargarSelectTipoSangre();
    cargarSelectComplexion();
    cargarSelectDiscapacidad();
    cargarSelectPais();
    cargarSelectEstado(1);
    cargarFoto();
    $("#frmEmpleado").submit(function (event) {
        validarEmpleado();
        event.preventDefault();
    });
    $("#frmEstudios").submit(function (event) {
        validarEstudios();
        event.preventDefault();
    });
    $('#vistaPrevia').hide();
    $('#erroresFrmEstudios').hide();
    $('#erroresFrmEmpleado').hide();
    $('#listaEstudios').hide();
    $(window).resize(function () {
        $(".select").select2({
            width: 'resolve',
            theme: "classic"
        });
    });

});

function validarEmpleado() {
    paterno = $('#txtPaterno').val();
    materno = $('#txtMaterno').val();
    nombre = $('#txtNombre').val();
    sexo = $('#selSexo').val();
    fechaNacimiento = $('#txtFechaNacimiento').val();
    numEmpleado = $('#txtNumEmpleado').val();
    numPension = $('#txtPension').val();
    fotografia = $('#prevFoto').attr('src');
    curp = $('#txtCurp').val();
    rfc = $('#txtRfc').val();
    estadoCivil = $('#selEstadoCivil').val();
    tipoSangre = $('#selTipoSangre').val();
    estatura = $('#txtEstatura').val();
    peso = $('#txtPeso').val();
    complexion = $('#selComplexion').val();
    tipoDiscapacidad = $('#selCatDiscapacidad').val();
    pais = $('#selPais').val();
    estado = $('#selEstado').val();
    municipio = $('#selMunicipio').val();
    localidad = $('#selLocalidad').val();
    colonia = $('#selColonia').val();
    codigoPostal = $('#txtCodigoPostal').val();
    tipoVialidad = $('#txtTipoVialidad').val();
    vialidad = $('#txtNombreVialidad').val();
    numExterior = $('#txtNumExterior').val();
    numInterior = $('#txtNumInterior').val();
    $.post("../model/cargarValidaciones.php", {
        funcion: 'empleado',
        paterno: paterno,
        materno: materno,
        nombre: nombre,
        sexo: sexo,
        fechaNacimiento: fechaNacimiento,
        numEmpleado: numEmpleado,
        numPension: numPension,
        fotografia: fotografia,
        curp: curp,
        rfc: rfc,
        estadoCivil: estadoCivil,
        tipoSangre: tipoSangre,
        estatura: estatura,
        peso: peso,
        complexion: complexion,
        tipoDiscapacidad: tipoDiscapacidad,
        pais: pais,
        estado: estado,
        municipio: municipio,
        localidad: localidad,
        colonia: colonia,
        codigoPostal: codigoPostal,
        tipoVialidad: tipoVialidad,
        vialidad: vialidad,
        numExterior: numExterior,
        numInterior: numInterior
    }).done(function (data) {
        $('#erroresFrmEmpleado').hide();
        $('#erroresFrmEmpleado').html("");
        data = JSON.parse(data);
        if (data.length == 0) {
            guardarDatos();
        } else {
            for (var i in data) {
                $('#erroresFrmEmpleado').append('<p>' + data[i] + '</p>');
            }
            $('#erroresFrmEmpleado').show();
            window.scrollTo(0, 0);
        }
    });
}

function validarEstudios() {
    $('#listaEstudios').html("");
    _escuela = $('#txtEscuela').val();
    _grado = $('#txtGradoEstudio').val();
    _inicio = $('#txtDesde').val();
    _fin = $('#txtHasta').val();
    $.post("../model/cargarValidaciones.php", {
        funcion: 'estudios',
        escuela: _escuela,
        grado: _grado,
        inicio: _inicio,
        fin: _fin
    }).done(function (data) {
        data = JSON.parse(data);
        if (data.length == 0) {
            estudios.push({
                escuela: _escuela,
                grado: _grado,
                inicio: _inicio,
                fin: _fin
            });
            for (var i in estudios) {
                $('#listaEstudios').append('<p>');
                $('#listaEstudios').append('Escuela: ' + estudios[i].escuela);
                $('#listaEstudios').append(' / grado: ' + estudios[i].grado);
                $('#listaEstudios').append(' / inicio: ' + estudios[i].inicio);
                $('#listaEstudios').append(' / fin: ' + estudios[i].fin);
                $('#listaEstudios').append(' <buton class="btn btn-sm" onclick="removerEstudio(' + i + ') "> Remover</button> ');
                $('#listaEstudios').append('</p>');
            }
            $('#listaEstudios').show();
            $('#erroresFrmEstudios').html("");
            $('#erroresFrmEstudios').hide();
            $('#frmEstudios').trigger("reset");
        } else {
            for (var i in data) {
                $('#erroresFrmEstudios').append('<p>' + data[i] + '</p>');
            }
            $('#erroresFrmEstudios').show();
        }
    });
}

function removerEstudio(indice) {
    estudios.splice(indice, 1);
    $('#listaEstudios').html("");
    for (var i in estudios) {
        $('#listaEstudios').append('<p>');
        $('#listaEstudios').append('Escuela: ' + estudios[i].escuela);
        $('#listaEstudios').append(' / grado: ' + estudios[i].grado);
        $('#listaEstudios').append(' / inicio: ' + estudios[i].inicio);
        $('#listaEstudios').append(' / fin: ' + estudios[i].fin);
        $('#listaEstudios').append(' <buton class="btn btn-sm" onclick="removerEstudio(' + i + ') "> Remover</button> ');
        $('#listaEstudios').append('</p>');
    }

    //$('#listaEstudios').append('<p>'+estudios+'</p>');
    $('#listaEstudios').show();
}

function cargarMascarasForm() {
    $('#txtCurp').mask(
        'AAAA000000AAAAAA00',
        { pattern: /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/ },
        { clearIfNotMatch: true }
    );
    $('#txtRfc').mask(
        'AAAA000000AA0',
        { pattern: /^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/ },
        { clearIfNotMatch: true }
    );
    $('#txtCodigoPostal').mask(
        '00000',
        { clearIfNotMatch: true }
    );
}

function cargarSelectEstadoCivil() {
    $('#selEstadoCivil').select2();
    $.get("../model/cargarCatalogo.php", { funcion: 'estadoCivil' })
        .done(function (data) {
            data = $.parseJSON(data);
            $('#selEstadoCivil').empty();
            for (var i in data) {
                $('#selEstadoCivil').append(new Option(data[i].Descripcion, data[i].Id));
            }
        });
}

function cargarSelectSexo() {
    $('#selSexo').select2();
    $.get("../model/cargarCatalogo.php", { funcion: 'Sexo' })
        .done(function (data) {
            data = $.parseJSON(data);
            $('#selSexo').empty();
            for (var i in data) {
                $('#selSexo').append(new Option(data[i].Descripcion, data[i].Id));
            }
        });
}

function cargarSelectTipoSangre() {
    $('#selTipoSangre').select2();
    $.get("../model/cargarCatalogo.php", { funcion: 'tipoSangre' })
        .done(function (data) {
            data = $.parseJSON(data);
            $('#selTipoSangre').empty();
            for (var i in data) {
                $('#selTipoSangre').append(new Option(data[i].Descripcion, data[i].Id));
            }
        });
}

function cargarSelectComplexion() {
    $('#selComplexion').select2();
    $.get("../model/cargarCatalogo.php", { funcion: 'complexion' })
        .done(function (data) {
            data = $.parseJSON(data);
            $('#selComplexion').empty();
            for (var i in data) {
                $('#selComplexion').append(new Option(data[i].Descripcion, data[i].Id));
            }
        });
}

function cargarSelectDiscapacidad() {
    $('#selCatDiscapacidad').select2();
    $.get("../model/cargarCatalogo.php", { funcion: 'discapacidad' })
        .done(function (data) {
            data = $.parseJSON(data);
            $('#selCatDiscapacidad').empty();
            for (var i in data) {
                $('#selCatDiscapacidad').append(new Option(data[i].Descripcion, data[i].Id));
            }
        });
}

function cargarSelectPais() {
    $('#selPais').select2();
    $('#selPais').on("select2:select", function (e) {
        pais = e.params.data.id;
        cargarSelectEstado(pais);
    });
    $.get("../model/cargarCatalogo.php", { funcion: 'pais' })
        .done(function (data) {
            data = $.parseJSON(data);
            $('#selPais').empty();
            for (var i in data) {
                $('#selPais').append(new Option(data[i].Descripcion, data[i].Id));
            }
        });
}

function cargarSelectEstado(_pais) {
    $('#selEstado').select2();
    $('#selEstado').on("select2:select", function (e) {
        estado = e.params.data.id;
        cargarSelectMunicipio(pais, estado);
    });
    $.get("../model/cargarCatalogo.php", { funcion: 'estado', pais: _pais })
        .done(function (data) {
            data = $.parseJSON(data);
            $('#selEstado').empty();
            for (var i in data) {
                $('#selEstado').append(new Option(data[i].Descripcion, data[i].Id));
            }
        });
}

function cargarSelectMunicipio(_pais, _estado) {
    $('#selMunicipio').select2();
    $('#selMunicipio').on("select2:select", function (e) {
        municipio = e.params.data.id;
        cargarSelectLocalidad(pais, estado, municipio);
        cargarSelectColonia(pais, estado, municipio, 1);
    });
    $.get("../model/cargarCatalogo.php", { funcion: 'municipio', pais: _pais, estado: _estado })
        .done(function (data) {
            data = $.parseJSON(data);
            $('#selMunicipio').empty();
            for (var i in data) {
                $('#selMunicipio').append(new Option(data[i].Descripcion, data[i].Id));
            }
        });
}

function cargarSelectLocalidad(_pais, _estado, _municipio) {
    $('#selLocalidad').select2();

    $('#selLocalidad').on("select2:select", function (e) {
        localidad = e.params.data.id;
        cargarSelectColonia(pais, estado, municipio, localidad);
    });
    $.get("../model/cargarCatalogo.php", { funcion: 'localidad', pais: _pais, estado: _estado, municipio: _municipio })
        .done(function (data) {
            data = $.parseJSON(data);
            $('#selLocalidad').empty();
            for (var i in data) {
                $('#selLocalidad').append(new Option(data[i].Descripcion, data[i].Id));
            }
        });
}

function cargarSelectColonia(_pais, _estado, _municipio, _localidad) {
    $('#selColonia').select2();
    $.get("../model/cargarCatalogo.php", { funcion: 'colonia', pais: _pais, estado: _estado, municipio: _municipio, localidad: _localidad })
        .done(function (data) {
            data = $.parseJSON(data);
            $('#selColonia').empty();
            for (var i in data) {
                $('#selColonia').append(new Option(data[i].Descripcion, data[i].Id));
            }
        });
}

function cargarFoto() {
    $(document).on('change', '.btn-file :file', function () {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
    });
    $('.btn-file :file').on('fileselect', function (event, label) {
        var input = $(this).parents('.input-group').find(':text'),
            log = label;
        if (input.length) {
            input.val(log);
        } else {
            if (log) alert(log);
        }
    });
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#prevFoto').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#fotografia").change(function () {
        readURL(this);
    });
}

async function guardarDatos() {
    try {
        if (estudios.length == 0) {
            alert('Debe llenar el formulario de estudios');
            $('#exampleModal').modal('show');
        } else {
            id = Math.floor(Math.random() * 101);
            st = JSON.stringify(estudios);

            await $.post("../model/Generar.php", {
                funcion: 'guardar',
                id: id,
                paterno: paterno,
                materno: materno,
                nombre: nombre,
                sexo: sexo,
                fechaNacimiento: fechaNacimiento,
                numEmpleado: numEmpleado,
                numPension: numPension,
                fotografia: fotografia,
                curp: curp,
                rfc: rfc,
                estadoCivil: estadoCivil,
                tipoSangre: tipoSangre,
                estatura: estatura,
                peso: peso,
                complexion: complexion,
                tipoDiscapacidad: tipoDiscapacidad,
                pais: pais,
                estado: estado,
                municipio: municipio,
                localidad: localidad,
                colonia: colonia,
                codigoPostal: codigoPostal,
                tipoVialidad: tipoVialidad,
                vialidad: vialidad,
                numExterior: numExterior,
                numInterior: numInterior,
                estudios: st
            }).done(function (data) {
                //cargarjson
                $.post("../model/Generar.php", {
                    funcion: 'obtener',
                    id: id,
                }).done(function (data) {
                    mostrarDatos(data);
                    $('#frmEmpleado').trigger("reset");
                    $("#prevFoto").attr("src", "../img/silueta.png");
                    estudios.length = 0;
                    $('#listaEstudios').hide();
                });
            });
        }
    } catch (e) {
        //console.log(e);
    }
}

function mostrarDatos(data) {
    $('#vistaPrevia').show();
    data = JSON.parse(data);
    var jsonEstudios = JSON.parse(data.estudios);
    $("#fotografiaVistaPrevia").attr("src", data.fotografia);
    $('#lblPaterno').text(data.paterno);
    $('#lblMaterno').text(data.materno);
    $('#lblNombre').text(data.nombre);
    $('#lblSexo').text(data.sexo);
    $('#lblFechaNacimiento').text(data.fechaNacimiento);
    $('#lblNumEmpleado').text(data.numEmpleado);
    $('#lblPension').text(data.numPension);
    $('#lblCurp').text(data.curp);
    $('#lblRfc').text(data.rfc);
    $('#lblEstadoCivil').text(data.estadoCivil);
    $('#lblTipoSangre').text(data.tipoSangre);
    $('#lblEstatura').text(data.estatura);
    $('#lblPeso').text(data.peso);
    $('#lblComplexion').text(data.complexion);
    $('#lblDiscapacidad').text(data.discapacidad);
    $('#lblPais').text(data.pais);
    $('#lblEstado').text(data.estado);
    $('#lblMunicipio').text(data.municipio);
    $('#lblLocalidad').text(data.localidad);
    $('#lblColonia').text(data.colonia);
    $('#lblCodigoPostal').text(data.codigoPostal);
    $('#lblTipoVialidad').text(data.tipoVialidad);
    $('#lblVialidad').text(data.vialidad);
    $('#lblNumExterior').text(data.numExterior);
    $('#lblnumInterior').text(data.numInterior);
    for (var i in jsonEstudios) {
        $('#ulEstudios').append('<ul>');
        $('#ulEstudios').append('<li>' + jsonEstudios[i].escuela + '</li>');
        $('#ulEstudios').append('<li>' + jsonEstudios[i].grado + '</li>');
        $('#ulEstudios').append('<li>' + jsonEstudios[i].inicio + '</li>');
        $('#ulEstudios').append('<li>' + jsonEstudios[i].fin + '</li>');
        $('#ulEstudios').append('</ul>');
    }
}

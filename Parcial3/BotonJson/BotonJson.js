$(document).ready(function() {
$('#BotonAlerta').click(function() {
          $('#Alertajeje').show();
          $('#Cerrar').show();

});

$('#Cerrar').click(function() {
          $('#Alertajeje').hide();
          $('#Cerrar').hide();
});

$('#BotonJS').click(function() {
          $('.modal-body').text("Usando JS")
          $('#EjemploModal').modal();
});

$('#BotonSweet').click(function() {
          swal({
                title: "Registro exitoso",
                text: "Datos cargados correctamente!!",
                icon: "success",
          });
});
$('#btnAjax').click(function(){
          var solicitud = new XMLHttpRequest ();
          solicitud.onreadystatechange = function()
          {
                if(solicitud.readyState == 4 && solicitud.status == 200){
                      document.getElementById("divHeader").innerHTML = solicitud.responseText;
                }};
                solicitud.open("GET", "archivo.txt", true);
                solicitud.send();
          });
}); 

$('#btnjson').click(function() {
    $.post('BotonJson.php',{},function(data){

        console.log(data);
        $('#idFecha').val(data.idFecha);
        $('#idHora').val(data.idHora);
        $('#nomPaciente').val(data.nomPaciente);
        $('#patPaciente').val(data.patPaciente);
        $('#matPaciente').val(data.matPaciente);
        $('#dirCliente').val(data.dirCliente);
        $('#colCliente').val(data.colCliente);
        $('#codCliente').val(data.codCliente);
        $('#emailPaciente').val(data.emailPaciente);
        $('#telPaciente').val(data.telPaciente);
        $('#ciudad').val(data.ciudad);
        $('#estado').val(data.estado);

    },'json');
});
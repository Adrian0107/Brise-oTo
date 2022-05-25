
$(document).ready(function() {
      $('#BotonSweet').click(function() {
                swal({
                      title: "Registroooooo exitoso",
                      text: "Datos cargados correctamente!!",
                      icon: "success",
                  });
      });
      $('#btnConsultar').click(function() {
      swal({
            title: "Registro exitoso",
            text: "Datos cargados correctamente!!",
            icon: "success",
        });
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

$('#btnFetch').click(function(){
      fetch('PracticaFetch.php')
            .then((respuesta) =>  respuesta.json() )
                  .then(function(dato) { refrescar(dato) });
});      
      function refrescar(objeto){
            $('#idFecha').val(objeto.idFecha);
            $('#idHora').val(objeto.idHora);
            $('#nomPaciente').val(objeto.nomPaciente);
            $('#patPaciente').val(objeto.patPaciente);
            $('#matPaciente').val(objeto.matPaciente);
            $('#dirCliente').val(objeto.dirCliente);
            $('#colCliente').val(objeto.colCliente);
            $('#codCliente').val(objeto.codCliente);
            $('#emailPaciente').val(objeto.emailPaciente);
            $('#telPaciente').val(objeto.telPaciente);
            $('#ciudad').val(objeto.ciudad);
            $('#estado').val(objeto.estado);      
      }

$('#btnConsulta').click(function(){
      $('modal1').modal1();
      $('modal1').on('hiden.bs.modal', function (e){
            let varid=$('#idconsulta').val();
            $.post('./pho/getRegistroDB.php',{par1:varid},function(){
                  refrescar(data);
            }, 'json');
      })
});







$(document).ready(function() {

      $('#btnConsultar').click(function() {
            let varid =prompt('Ingrese un ID para consultar');
            $.post('./php/Consultar.php',{par1:varid},function(data){
            refrescar(data);
            },'json');
      });
      
      function refrescar(objeto){
          console.log(objeto);
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

      
});









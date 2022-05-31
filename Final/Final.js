$(document).ready(function() {

      $('#btnConsultar').click(function() {
            let varid =prompt('Ingrese un ID para consultar');
            $.post('./php/Consultar.php',{par1:varid},function(data){
            refrescar(data);
            },'json');
      });

      $('#btnBorrar').click(function() {
            let varid =prompt('Ingrese el ID del registro a eliminar');
            $.post('./php/Borrar.php',{par1:varid});
            
      });

      $('#btnIngresar').click(function() {
           let Fecha = $('#idFecha').val();
           let Hora = $('#idHora').val();
           let Nombre = $('#nomPaciente').val();
           let Apellido_Paterno = $('#patPaciente').val();
           let Apellido_Materno = $('#matPaciente').val();
           let Direccion = $('#dirCliente').val();
           let Colonia = $('#colCliente').val();
           let Codigo_Postal = $('#codCliente').val();
           let Email = $('#emailPaciente').val();
           let Telefono = $('#telPaciente').val();
           let Ciudad = $('#ciudad').val();
           let Estado = $('#estado').val();
           $.post('./php/Ingresar.php',{Fe:Fecha,Ho:Hora,Nom:Nombre,Pat:Apellido_Paterno,Mat:Apellido_Paterno,Dir:Direccion,Col:Colonia,Cod:Codigo_Postal,Em:Email,Tel:Telefono,Ciu:Ciudad,Est:Estado});
      });
      
      function refrescar(objeto){ 
          console.log(objeto);
          $('#idFecha').val(objeto.Fecha);
          $('#idHora').val(objeto.Hora);
          $('#nomPaciente').val(objeto.Nombre);
          $('#patPaciente').val(objeto.Apellido_Paterno);
          $('#matPaciente').val(objeto.Apellido_Materno);
          $('#dirCliente').val(objeto.Direccion);
          $('#colCliente').val(objeto.Colonia);
          $('#codCliente').val(objeto.Codigo_Postal);
          $('#emailPaciente').val(objeto.Email);
          $('#telPaciente').val(objeto.Telefono);
          $('#ciudad').val(objeto.Ciudad);
          $('#estado').val(objeto.Estado);  
          console.log(objeto.Apellido_Paterno);
          console.log("Bandera");
      }

      
});









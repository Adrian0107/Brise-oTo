$(document).ready(function() {

      $('#btnConsultar').click(function() {
            let varid =prompt('Ingrese un ID para consultar');
            $.post('./php/Consultar.php',{par1:varid},function(data){
            refrescar(data);
            },'json');
      });

      $('#btnBorrar').click(function() {
      let varid = $('#IDID').val();
           Swal.fire({
            title: 'Estas seguro?',
            text: "Esto no se puede revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Eliminado!',
                'El registro ha sido eliminado',
                'success'
              )
              $.post('./php/Borrar.php',{par1:varid});
            }
      })    
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

      $('#btnModificar').click(function() {
            let ID = $('#IDID').val();
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

            Swal.fire({
                  title: 'Estas seguro de aplicar los cambios?',
                  text: "Esto no se puede revertir",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Aplicar'
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire(
                      'Cambios aplicados!',
                      'Los cambios al registro han sido guardados',
                      'success'
                    )
                    $.post('./php/Editar.php',{Mid:ID,Fe:Fecha,Ho:Hora,Nom:Nombre,Pat:Apellido_Paterno,Mat:Apellido_Paterno,Dir:Direccion,Col:Colonia,Cod:Codigo_Postal,Em:Email,Tel:Telefono,Ciu:Ciudad,Est:Estado});
                  }
            })
       });
      
      function refrescar(objeto){ 
          console.log(objeto);
          $('#IDID').val(objeto.ID);
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
      }

      $("#btnHolaaa").click(function(){
            Swal.fire({
                  title: 'Estas seguro de aplicar los cambios?',
                  text: "Esto no se puede revertir",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Aplicar'
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire(
                      'Cambios aplicados!',
                      'Los cambios al registro han sido guardados',
                      'success'
                    )
                  }
            })
      });
       
});









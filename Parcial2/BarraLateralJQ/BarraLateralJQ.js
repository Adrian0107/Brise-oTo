//$(document).ready(function(){
  //  alert("jquery se cargo correctamente");
//})

$(document).ready(function(){
    $("#btn").click(alternarMenu);
    function alternarMenu(){
        $("#SB").toggleClass("EsconderMostrar");
        $("#CF").toggleClass("Margin");
    }
});
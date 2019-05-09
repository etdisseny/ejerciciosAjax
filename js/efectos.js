$(document).ready(function(){

    var caja= $("#caja");
    $("#mostrar").click(function(){
        caja.toggle('slow');
    });

    $("#animar").click(function() {
        $( "#caja" ).animate(
            {marginLeft:'500px',
            fontSize:'25px'
            },
             'slow', function(){
                 alert('fin de la animación');
             });
    });

});
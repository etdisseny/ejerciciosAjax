$(document).ready(function(){
//$.GET
    $.get("https://reqres.in/api/users",{page:3}, function(response){
        response.data.forEach((element, index)=>{
            $('#datos').append("<p>"+ element.first_name+" "+ element.last_name +"</p>");
        });
    });
//al enviar el formulario
/*ponemos el preventDefaul para capturar el evento y no nos envie
a otra página y aparte ponerle un return false */

  $('#formulario').submit(function(e){
      e.preventDefault();
    //recogemos los valores del formulario en una variable mediante un json
        var usuario={
            "name":$('input[name="nombre"]').val(),
            "web": $('input[name="web"]').val()
        }
        console.log(usuario);

        /* OTRA OCION ES HACERLO CON EL MÉTODO $.AJAX...SERÍA LA FORMA MÁS
        OPTIMA DE HACERLO...

        //$.POST
    //en este caso como la URL la pusimos en el action, la recuperamos con $(this).attr('action')
        $.post($(this).attr('action'), usuario, function(response){
        console.log(response);
        }).done(function(){
            alert("usuario añadido");
        });

        */
       //$.AJAX le pasamos más datos
        $.ajax({

        })

        return false;
  }); 

});
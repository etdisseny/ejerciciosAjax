$(document).ready(function(){
    //load
    //$('#datos').load('http://etdisseny.cat/');
    //Get y Post

// recojo todos los datos porque en la direcccion no tenemos un random
    $.get("http://api.icndb.com/jokes/", function(response){

        response.value.forEach(function(element, index){
            $("#datos").append("<p>" + element.joke + "</p>");
        });

        $("#datos").append("<p>" + response.value.joke + "</p>")
     });

     //esto es una direccion random, que saca un solo valor, no hace falta el foreach

    /*$.get("http://api.icndb.com/jokes/random", function(response){
        $("#datos").append("<p>" + response.value.joke + "</p>")
     });*/

   

});
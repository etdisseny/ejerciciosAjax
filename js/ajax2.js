$(document).ready(function(){
  

// recojo todos los datos porque en la direcccion no tenemos un random
    $.get("http://api.linkpreview.net/?key=123456&q=https://www.google.com", function(response){

        console.log(response.description);
     });

     
     $.ajax({
        url: "https://api.linkpreview.net?key=123456&q=https://www.google.com",
        success: function(result){
            console.log(result);
        }
    });
   
   

});
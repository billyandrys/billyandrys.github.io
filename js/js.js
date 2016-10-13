$(document).ready(function(){
    var lg = $('.container');
    lg.hide();
    lg.fadeIn(90000, function(){
        lg.show(200);
    });
    
});


function Datos(){
  
  $("video").fadeOut("slow");
  var page = "http://localhost/billyandrys.github.io/un_poco_de_mi/";
 
	location.href=page;
 

}
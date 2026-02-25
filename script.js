$(document).ready(function(){

$(".project").click(function(){

var img = $(this).attr("src");

$("#mainImage").fadeOut(300,function(){

$(this).attr("src",img);

}).fadeIn(300);

});

});
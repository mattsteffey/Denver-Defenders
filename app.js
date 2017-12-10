$(document).ready(function() {





//this is the random number generator ...
function numberGenerated() {
   return Math.floor(Math.random() * 10);
}


//This controls player 1
$(document).keypress(function(a) {
    if(a.keyCode == 97)
	$(".playerplaceholder").animate({marginTop: "-=3%"}, -200);
	
});
$(document).keypress(function(z) {
    if(z.keyCode == 122)
	$(".playerplaceholder").animate({marginTop: "+=3%"}, -200);
	
});
































});
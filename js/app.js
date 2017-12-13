

//Meteor Generator

$('html, body').css({
   overflow: 'hidden',       //disables scrolling
   height: '100%',
   width: '100%',
});


var b = setInterval(generator, 700);






// Makes a meteor and drops it into the game !!ONCE PER SECOND!!
// image class = meteor
function generator() {
	var meteorCoordinate = Math.floor(Math.random() * 100) + 30 ; // number from 30-100
    var meteor = document.createElement("IMG");					// creates image
    meteor.setAttribute("src", "./gameimages/meteor.png");		// makes image a meteor
    meteor.setAttribute("class", "meteor");						// sets class
    meteor.style.paddingLeft = meteorCoordinate +"%";     		// padding left is equal to 30-100
    document.body.appendChild(meteor);							// puts meteor into the game board

}

//Player Controls

$(document).keypress(function(a) {
    if(a.keyCode == 97)
	$(".playerplaceholder").animate({marginTop: "-=3%"}, -200);
});
 $(document).keypress(function(z) {
    if(z.keyCode == 122)
  $(".playerplaceholder").animate({marginTop: "+=3%"}, -200);
});

$(document).keyup(function(space) {
    if(space.keyCode == 32)
	$(click());
});




function click() {
   var ammo = document.createElement("IMG");        
    ammo.setAttribute("src", "./gameimages/ammo.png");    
    ammo.setAttribute("class", "ammo");
    ammo.style.paddingLeft = "13%";   
    document.body.appendChild(ammo);             
}
























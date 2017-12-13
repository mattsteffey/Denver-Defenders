

//Meteor Generator


var b = setInterval(generator, 1000);



// Assigns a number 1-100 to the variable meteorCoordinate !!ONCE PER SECOND!!	


// Makes a meteor and drops it into the game !!ONCE PER SECOND!!
// image class = meteor
function generator() {
	var meteorCoordinate = Math.floor(Math.random() * 100) + 1; // number from 1-100
    var meteor = document.createElement("IMG");					// creates image
    meteor.setAttribute("src", "./gameimages/meteor.png");		// makes image a meteor
    meteor.setAttribute("class", "meteor");						// sets class
    meteor.style.paddingLeft = meteorCoordinate +"%";     		// padding left is equal to 1-100
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






















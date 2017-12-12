

//Meteor Generator

var meteorSpawn = setInterval(meteorNumber, 1000);
var meteorDrop = setInterval(generator, 1000);
var meteorDrop = setInterval(generator, 1000);


	
function meteorNumber() {
	meteorCoordinate = Math.floor(Math.random() * 100) + 1; 
	return meteorCoordinate;
}

function generator() {
    var meteor = document.createElement("IMG");
    meteor.setAttribute("src", "./gameimages/meteor.png");
    meteor.setAttribute("class", "meteor");
    document.body.appendChild(meteor);

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






















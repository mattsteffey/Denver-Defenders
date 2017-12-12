

//Meteor Generator
var meteorSpawn = setInterval(meteorPlacement, 1000);
var meteorDrop = setInterval(generator, 1000);
	
function meteorPlacement() {
	meteorNumber = Math.floor(Math.random() * 100) + 1; 
	console.log(meteorNumber);
}

function meteorMaker() {
	
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



var newMeteor = new Image();
newMeteor.src = './gameimages/meteor.png';

document.body.appendChild(newMeteor);


//var meteor = document.createElement("img");

//document.getElementById("myImg").src = "hackanm.gif";


function generator() {
    var meteor = document.createElement("IMG");
    meteor.setAttribute("src", "./gameimages/meteor.png");
    meteor.setAttribute("class", "meteor");
    document.body.appendChild(meteor);
}



















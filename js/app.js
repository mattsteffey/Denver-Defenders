window.onload = createPlayer;
var sprite = localStorage.getItem('charid');
//  This moves the meteors along the y-axis incrementally 
setInterval(makeFall, 75);
function makeFall() {
  var x = document.querySelectorAll(".meteor"); 
  var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.marginTop = parseInt(x[i].style.marginTop) + 1 + "%"; }
}

setInterval(ammoMove, 10);
function ammoMove() {
  var x = document.querySelectorAll(".ammo");
  var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.marginLeft = parseInt(x[i].style.marginLeft) + 1 + "%"; }
}


// This creates the meteors, and places them on a randomly along the x-axis
setInterval(makeMeteor, 500);
setInterval(makeMeteor, 500);
setInterval(makeMeteor, 500);
function makeMeteor() {
  var meteor = document.createElement("img");              //Makes an IMG Tag
  meteor.setAttribute("src", "./gameimages/meteor.gif");   //Makes that IMG a Meteor    
  meteor.setAttribute("class", "meteor");                  //Classes the Meteor
  var x = Math.floor(Math.random() * 10) * 9 ;            //1-100 for x-axis
  meteor.style.marginLeft = 10 + x +"%";                        //Applies a x-axis 1-100
  meteor.style.marginTop = 0 +"%"; 
  document.body.appendChild(meteor);                       //Places the Meteor into the game
}

// This Creates AMMO



function createPlayer() {
  var player = document.createElement("img"); 
  player.setAttribute("src", sprite);
  player.setAttribute("id", "player");
  player.style.position = "absolute";
  player.style.width = 10+"%";
  player.style.marginTop = 0 +"%"; 
  document.body.appendChild(player);          
}





$(document).keypress(function(a) {
  var playerLoc = 0;
    if(a.keyCode == 97)
	$("#player").animate({marginTop: "-=5%"}, -200);
    if(a.keyCode == 122)
  $("#player").animate({marginTop: "+=5%"}, -200);
   
});


function ammoAxis() {
  x = document.querySelectorAll("#player"); 
    console.log(player);
}

window.addEventListener("click", makeAmmo);               // Click to Shoot
function makeAmmo() {
  var ammo = document.createElement("img");               //Makes an IMG Tag      
  ammo.setAttribute("src", "./gameimages/ammo.png");      //Makes IMG Ammo
  ammo.setAttribute("class", "ammo");
  var y = player.style.marginTop; 
  ammo.style.marginTop = y;                   //Class = Ammo
  ammo.style.marginLeft = 10 + "%";                       //Positions in front of plane 
  document.body.appendChild(ammo);

}



$('html, body').css({  
   overflow: 'hidden', 
   height: '100%',     
   width: '100%',     
});







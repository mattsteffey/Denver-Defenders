window.onload = createPlayer;
// window.onload = createTimer;
var sprite = localStorage.getItem('charid');
var score = 0;
//Meteor Movement
setInterval(makeFall, 50);
function makeFall() {
  var x = document.querySelectorAll(".meteor"); 
  var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.marginTop = parseInt(x[i].style.marginTop) + 1 + "%"; }
}

//timer countdown
var timer = 10;
setInterval(timerCount, 1000);
function timerCount() {
  if (timer > 0) {
    timer -= 1;
    console.log(timer);
   }
}

//Creates the Timer Box
function createTimer() {
  var timerBox = document.createElement("div");  //creates a div
  timerBox.setAttribute("class", timer);         //sets class to timer
  document.body.appendChild(timerBox);          //adds div to body      
}









// This creates the meteors, and places them on a randomly along the x-axis
setInterval(makeMeteor, 1000);
setInterval(makeMeteor, 1000);

function makeMeteor() {
  var meteorId = Math.random().toString(36).substr(2, 9);  //Generates a random Meteor ID
  var meteor = document.createElement("img");              //Makes an IMG Tag
  meteor.setAttribute("src", "./gameimages/meteor.gif");   //Makes that IMG a Meteor 
  var x = Math.floor(Math.random() * 10) * 7 + 3 ;         //1-100 for x-axis   
  meteor.setAttribute("class", "meteor");                  //Classes the Meteor
  meteor.setAttribute("id", meteorId);                     //Applies Random ID
  meteor.style.marginLeft = 10 + x +"%";                   //Applies to x-axis
  meteor.style.marginTop = 0 +"%";
  meteor.addEventListener("click", killMeteor);            //Excecutes function on click
  document.body.appendChild(meteor);                       //Places the Meteor into the game
}


//Click function to kill meteors and add to score
function killMeteor() {
  x = this.getAttribute('id');
  document.getElementById(x).remove();
  score += 10;
} 
 


//Adds player token into the game
function createPlayer() {
  var player = document.createElement("img"); 
  player.setAttribute("src", sprite);
  player.setAttribute("id", "player");
  player.style.position = "absolute";
  player.style.width = 15+"%";
  player.style.marginTop = 20 +"%"; 
  document.body.appendChild(player);          
}


//Sroll Lock
$('html, body').css({  
   overflow: 'hidden', 
   height: '100%',     
   width: '100%',     
});

























//CLICK TO SHOOT

// window.addEventListener("click", makeAmmo);               // Click to Shoot
// function makeAmmo() {
//   var ammo = document.createElement("img");               //Makes an IMG Tag      
//   ammo.setAttribute("src", "./gameimages/ammo.png");      //Makes IMG Ammo
//   ammo.setAttribute("class", "ammo");
//   var y = player.style.marginTop; 
//   ammo.style.marginTop = y;                                //Class = Ammo
//   ammo.style.marginLeft = 10 + "%";                       //Positions in front of plane 
//   document.body.appendChild(ammo);
// }

//function ammoAxis() {
//   x = document.querySelectorAll("#player"); 
//     console.log(player);
// }


//PLAYER MOVEMENT

// $(document).keypress(function(a) {
//   var playerLoc = 0;
//     if(a.keyCode == 97)
//  $("#player").animate({marginTop: "-=5%"}, -200);
//     if(a.keyCode == 122)
//   $("#player").animate({marginTop: "+=5%"}, -200);
   
// });

//Ammo Movement
// setInterval(ammoMove, 10);
// function ammoMove() {
//   var x = document.querySelectorAll(".ammo");
//   var i;
//     for (i = 0; i < x.length; i++) {
//       x[i].style.marginLeft = parseInt(x[i].style.marginLeft) + 1 + "%"; }
// }



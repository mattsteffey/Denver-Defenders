window.onload = loadFunction;

//Global Variable for Selcted Character, Score, and Timer....
var sprite = localStorage.getItem('charid');
var score = 0;
var timer = 99;


///////////////////MASTER WINDOW LOAD FUNCTION//////////////////////////////////////

//  THIS CREATES THE PLAYER, TIMER BOX, AND SCORE BOX WHEN THE WINDOW LOADS
function loadFunction() {
  
  //Timer Box
  var timerBox = document.createElement("div");  //creates a div
  timerBox.setAttribute("id", "timer");         //sets class to timer
  document.body.appendChild(timerBox);          //adds div to body  
  document.getElementById("timer").innerHTML = "TIME: " + timer; 
  //Score Box
  var scoreBox = document.createElement("div");  //creates a div
  scoreBox.setAttribute("id", "score");         //sets class to timer
  document.body.appendChild(scoreBox);          //adds div to body    
  document.getElementById("score").innerHTML = "SCORE: " + score; 
  //Player Sprite
  var player = document.createElement("img"); 
  player.setAttribute("src", sprite);
  player.setAttribute("id", "player");
  player.style.position = "absolute";
  player.style.width = 15+"%";
  player.style.marginTop = 20 +"%"; 
  document.body.appendChild(player);          
}

/////////////////////////////////////////////////////////////////////////////////////



//Meteor Movement
setInterval(makeFall, 40);
function makeFall() {
  var x = document.querySelectorAll(".meteor"); 
  var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.marginTop = parseInt(x[i].style.marginTop) + 1 + "%"; }
}

//timer countdown
setInterval(timerCount, 1000);
function timerCount() {
  if (timer > 0) {
    timer -= 1;
  }
 document.getElementById("timer").innerHTML = "TIME: " + timer;
}









// This creates the meteors, and places them on a randomly along the x-axis
setInterval(makeMeteor, 300);


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
  meteor.addEventListener("click", addPoints);
  document.body.appendChild(meteor);                       //Places the Meteor into the game
}


//Click function to kill meteors and add to score
function killMeteor() {
  x = this.getAttribute('id');
  document.getElementById(x).setAttribute("src", "./gameimages/ten.png");
  document.getElementById(x).style.width = 5+"%";
  document.getElementById(x).style.paddingLeft += 5+"%";
  document.getElementById(x).style.paddingTop += 5+"%";
  score += 10;
} 


function addPoints() {
  document.getElementById("score").innerHTML = "SCORE: " + score;
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



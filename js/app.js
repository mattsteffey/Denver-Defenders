

//  This moves the meteors along the y-axis incrementally 
setInterval(makeFall, 600);
function makeFall() {
  var x = document.querySelectorAll(".meteor");
  var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.marginTop = parseInt(x[i].style.marginTop) + 5 + "%"; }
}

setInterval(ammoMove, 10);
function ammoMove() {
  var x = document.querySelectorAll(".ammo");
  var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.marginLeft = parseInt(x[i].style.marginLeft) + 1 + "%"; }
}



// This creates the meteors, and places them on a randomly along the x-axis
setInterval(makeMeteor, 600);
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

window.addEventListener("click", makeAmmo);
function makeAmmo() {
  var ammo = document.createElement("img");              //Makes an IMG Tag
  ammo.setAttribute("src", "./gameimages/ammo.png");   //Makes that IMG a Meteor    
  ammo.setAttribute("class", "ammo");                  //Classes the Meteor                                     //1-100 for x-axis
  ammo.style.marginLeft = 13 + "%";                        //Applies a x-axis 1-100  
  document.body.appendChild(ammo);                       //Places the Meteor into the game
}










function createPlayer() {
  var player = document.createElement("img"); 
  player.setAttribute("src", "./gameimages/plane.gif");
  player.setAttribute("id", "player");
  player.style.position = "absolute";
  player.style.width = 8+"%";
  player.style.marginTop = 20 +"%"; 
  document.body.appendChild(player);          
}




// //Player Controls
$(document).keypress(function(a) {
    if(a.keyCode == 97)
	$("#player").animate({marginTop: "-=5%"}, -200);
    if(a.keyCode == 122)
  $("#player").animate({marginTop: "+=5%"}, -200);
});
 





    //If you want to remove all images
    //$(this).parent().find('img').remove();




//    var ammo = document.createElement("IMG");        
//    ammo.setAttribute("src", "./gameimages/ammo.png");    
//    ammo.setAttribute("class", "ammo");
//     ammo.style.paddingLeft = "13%";   
//    document.body.appendChild(ammo);             
// // }


// window.addEventListener("click", shoot);



















           




























$('html, body').css({  
   overflow: 'hidden', 
   height: '100%',     
   width: '100%',     
});
















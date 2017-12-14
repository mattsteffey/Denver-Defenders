

//  This moves the meteors along the y-axis incrementally 
setInterval(makeFall, 1000);
function makeFall() {
  var x = document.querySelectorAll(".meteor");
  var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.marginTop = parseInt(x[i].style.marginTop) + 5 + "%"; }
}


function shoot() {
    var ammo = document.createElement("img");                     //Makes an IMG Tag
    ammo.setAttribute("src", "./gameimages/ammo.png");            //Makes that IMG ammo    
    ammo.setAttribute("class", "ammo"); 
    ammo.setAttribute("style", "margin-top: 0%"); 
 
    var x = ammo.style.marginTop;

console.log(x);

}



window.addEventListener("click", shoot);






// This creates the meteors, and places them on a randomly along the x-axis
setInterval(makeMeteor, 1000);
function makeMeteor() {
  var meteor = document.createElement("img");              //Makes an IMG Tag
  meteor.setAttribute("src", "./gameimages/meteor.gif");   //Makes that IMG a Meteor    
  meteor.setAttribute("class", "meteor");                  //Classes the Meteor
  var x = Math.floor(Math.random() * 100) + 1 ;            //1-100 for x-axis
  meteor.style.marginLeft = x +"%";                        //Applies a x-axis 1-100
  meteor.style.marginTop = 0 +"%";  
  document.body.appendChild(meteor);                       //Places the Meteor into the game
}




// //Player Controls
$(document).keypress(function(a) {
    if(a.keyCode == 97)
	$(".playerplaceholder").animate({marginTop: "-=5%"}, -200);
    if(a.keyCode == 122)
  $(".playerplaceholder").animate({marginTop: "+=5%"}, -200);
});
 





    //If you want to remove all images
    //$(this).parent().find('img').remove();



 // function click() {
//    var ammo = document.createElement("IMG");        
//     ammo.setAttribute("src", "./gameimages/ammo.png");    
//     ammo.setAttribute("class", "ammo");
//     ammo.style.paddingLeft = "13%";   
//     document.body.appendChild(ammo);             
// }





















    // var meteor = document.createElement("IMG");              
    // meteor.setAttribute("src", "./gameimages/meteor.gif");     
    // meteor.setAttribute("class", "meteor");
    // meteor.setAttribute("onmouseleave", "this.src='./gameimages/sparkle.gif'");
    // meteor.style.marginLeft = meteorYAxis +"%";
  //  document.body.appendChild(meteor);
           




























$('html, body').css({  
   overflow: 'hidden', 
   height: '100%',     
   width: '100%',     
});
















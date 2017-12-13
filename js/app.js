

//Meteor Generator

//disables scrolling
$('html, body').css({  
   overflow: 'hidden', 
   height: '100%',     
   width: '100%',     
});


var a = setInterval(generator, 800);



// Makes a meteor and drops it into the game !!ONCE PER SECOND!!
// image class = meteor
function generator() {
	var meteorCoordinate = Math.floor(Math.random() * 100) + 5 ; // number from 1-100
    var meteor = document.createElement("IMG");					        // creates image
    meteor.setAttribute("src", "./gameimages/meteor.gif");		  // makes image a meteor
    meteor.setAttribute("class", "meteor");
    meteor.setAttribute("id", Math.random()); 
    meteor.setAttribute("onclick", "this.src='./gameimages/sparkle.gif'");
      				           		// sets class
    meteor.style.marginLeft = meteorCoordinate +"%";     	   	// padding left is equal to 30-100
    document.body.appendChild(meteor);							             // puts meteor into the game board

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



    //If you want to remove all images
    //$(this).parent().find('img').remove();



 // function click() {
//    var ammo = document.createElement("IMG");        
//     ammo.setAttribute("src", "./gameimages/ammo.png");    
//     ammo.setAttribute("class", "ammo");
//     ammo.style.paddingLeft = "13%";   
//     document.body.appendChild(ammo);             
// }























// get char by ID
// On char click, set local storage
// make variable from local storage value
// use variable as ID for the plane

document.getElementById("jones").addEventListener("click", function() {
    localStorage.setItem("charid", "./gameimages/CharacterSprites/plane-arapahoejones.gif");
   });
document.getElementById("beth").addEventListener("click", function() {
    localStorage.setItem("charid", "./gameimages/CharacterSprites/plane-bethbroadwaypose.gif");
});
document.getElementById("bud").addEventListener("click", function() {
    localStorage.setItem("charid", "./gameimages/CharacterSprites/plane-budpose.gif");
});
document.getElementById("kid").addEventListener("click", function() {
    localStorage.setItem("charid", "./gameimages/CharacterSprites/plane-kidcolfax.gif");
});
document.getElementById("keg").addEventListener("click", function() {
    localStorage.setItem("charid", "./gameimages/CharacterSprites/plane-keg5280pose.gif");
});
document.getElementById("scotty").addEventListener("click", function() {
    localStorage.setItem("charid", "./gameimages/CharacterSprites/plane-scottyhopspose.gif");
});
document.getElementById("sir").addEventListener("click", function() {
    localStorage.setItem("charid", "./gameimages/CharacterSprites/plane-sirlawrencepose.gif");
});




document.getElementById("jones").onmouseover = function(){
 document.getElementById("charName").innerHTML = "ARAPAHOE JONES";
 document.getElementById("charName").style.color = "#853cf2";
};
document.getElementById("beth").onmouseover = function(){
 document.getElementById("charName").innerHTML = "BETH BROADWAY";
 document.getElementById("charName").style.color = "#f268ff";
};
document.getElementById("bud").onmouseover = function(){
 document.getElementById("charName").innerHTML = "LADYBUD";
 document.getElementById("charName").style.color = "#68ff77";
};
document.getElementById("kid").onmouseover = function(){
 document.getElementById("charName").innerHTML = "KID COLFAX";
 document.getElementById("charName").style.color = "#ff0000";
};
document.getElementById("keg").onmouseover = function(){
 document.getElementById("charName").innerHTML = "KEG-5280";
 document.getElementById("charName").style.color = "#a0a0a0";
};
document.getElementById("scotty").onmouseover = function(){
 document.getElementById("charName").innerHTML = "SCOTTY HOPS";
 document.getElementById("charName").style.color = "#ffb200";
};
document.getElementById("sir").onmouseover = function(){
 document.getElementById("charName").innerHTML = "SIR LAWRENCE";
 document.getElementById("charName").style.color = "#fff200";
};





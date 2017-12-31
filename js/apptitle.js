
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


document.getElementById("beth").onmouseover = function(){
 document.getElementById("charName").innerHTML = "BETH BROADWAY";
};




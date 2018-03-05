
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
 document.getElementById("characterBio").innerHTML = "The owner and operator of a family pizza chain in the historic Five Points, Arapahoe Jones is a no-nonsense business person who's mortal enemies are hipster foodies and their Instagram accounts.";
};
document.getElementById("beth").onmouseover = function(){
 document.getElementById("charName").innerHTML = "BETH BROADWAY";
 document.getElementById("charName").style.color = "#f268ff";
 document.getElementById("characterBio").innerHTML = "A punk rock bassist in many local Denver bands, she'll be the first person to tell you that Denver used to be cooler.";
};
document.getElementById("bud").onmouseover = function(){
 document.getElementById("charName").innerHTML = "LADYBUD";
 document.getElementById("charName").style.color = "#68ff77";
 document.getElementById("characterBio").innerHTML = "From places unknown, Ladybud showed up in Denver in 2014, but many people say they saw her even earlier on shady street corners and middle school art teacher's offices.";
};
document.getElementById("kid").onmouseover = function(){
 document.getElementById("charName").innerHTML = "KID COLFAX";
 document.getElementById("charName").style.color = "#ff0000";
 document.getElementById("characterBio").innerHTML = "A bartender at a local dive, Kid Colfax likes to sit around and think of all of his wasted potential, but his job is too easy to want to do anything else.";
};
document.getElementById("keg").onmouseover = function(){
 document.getElementById("charName").innerHTML = "KEG-5280";
 document.getElementById("charName").style.color = "#a0a0a0";
 document.getElementById("characterBio").innerHTML = "The sentient beer keg that manifested from a catastrophic blueberry infused IPA experiment, KEG-5280 spends most of his time searching the city for love.";
};
document.getElementById("scotty").onmouseover = function(){
 document.getElementById("charName").innerHTML = "SCOTTY HOPS";
 document.getElementById("charName").style.color = "#ffb200";
 document.getElementById("characterBio").innerHTML = "An apprentice brewer, Scotty Hops is the youngest of the Denver Defenders. Actually, someone should check his I.D.";
};
document.getElementById("sir").onmouseover = function(){
 document.getElementById("charName").innerHTML = "SIR LAWRENCE";
 document.getElementById("charName").style.color = "#fff200";
 document.getElementById("characterBio").innerHTML = "The self proclaimed hipster king of Denver, Sir Lawrence wastes his days riding his 3000 dollar bicycle his dad bought for him and explaining to people why vinyl 'just sounds better'";
};





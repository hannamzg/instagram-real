let searchInpt = document.getElementById("serchInpt");
let searchIcon = document.getElementById("searchIcon");
let searchIcon2 = document.getElementById("searchIcon2");

searchInpt.onfocus = function(){
    searchIcon.style.display = "none";
    searchInpt.style.outline = "none";
    searchIcon2.style.display ="block";
}

function onOut(){
    searchIcon.style.display = "block";
    searchInpt.value = "";
    searchIcon2.style.display ="none";
}
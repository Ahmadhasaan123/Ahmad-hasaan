var typed = new Typed(".text",{
    strings:["Frontend developer","Website Expert","Web Developer"],
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000,
    loop:true
})


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(event, tabname){
    for(tablink of tablinks ){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents ){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

// nav bar res

var sidemenu = document.getElementById("sidemenu");
var menuIcon = document.querySelector(".fa-bars");
var closeIcon = document.querySelector(".fa-xmark");

// Initialize the sidemenu position on page load
document.addEventListener("DOMContentLoaded", function () {
    // Ensure the menu is hidden on mobile by default
    if (window.innerWidth <= 600) {
        sidemenu.style.right = "-200px";
    }
});

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
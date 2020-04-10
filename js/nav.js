let mainNav = document.getElementsByClassName("navigation__list");
let navBarToggle = document.getElementById("navigation__menu-btn");
let mobileArrow = document.getElementById("mobilearrow");
let authorinfo = document.getElementsByClassName("author--history");

navBarToggle.addEventListener("click", function() {
    Array.from(mainNav).forEach(elem => {
        elem.classList.toggle("active-navbar");
    })
});

mobileArrow.addEventListener("click", function() {
    Array.from(authorinfo).forEach(elem => {
        elem.classList.toggle("active");
        console.log('working');
    })
});

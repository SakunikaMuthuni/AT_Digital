// for toggle the mobile menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu')
    });
}

if(navClose){
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu')
    });
}

//for remove mobile menu when select
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var panel = this.nextElementSibling;
        var icon = this.querySelector("i");

        if (panel.style.display === "block") {
            panel.style.display = "none";
            icon.classList.remove("ri-subtract-fill");
            icon.classList.add("ri-add-fill");
        } else {
            panel.style.display = "block";
            icon.classList.remove("ri-add-fill");
            icon.classList.add("ri-subtract-fill");
        }
    });
}
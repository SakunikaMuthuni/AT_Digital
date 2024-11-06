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

//scroll animations
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2500,
    delay: 400,
});

// sr.reveal('.header', { origin: 'top', distance: '20px', duration: 900, delay: 200 });
sr.reveal('.nav-logo', { delay: 300 });

sr.reveal('.hero-container', { origin: 'bottom', distance: '50px' });
sr.reveal('.hero-image', { origin: 'left', delay: 500, distance: '200px' });
sr.reveal('.hero-content', { origin: 'right', delay: 700, distance: '200px' });
sr.reveal('.hero-content h1', { delay: 900 });
sr.reveal('.section-button', { delay: 1000 });

sr.reveal('.feature-container', { interval: 400 });
sr.reveal('.features-image', { origin: 'left', delay: 400 });
sr.reveal('.feature-description', { origin: 'right', delay: 400 });

sr.reveal('.wrapper h1', { origin: 'bottom', distance: '30px', delay: 400 });
sr.reveal('.faq', { interval: 200, origin: 'bottom' });

sr.reveal('.footer-container', { origin: 'top', delay: 300 });
sr.reveal('.footer-widget', { interval: 200 });
sr.reveal('.footer-logo', { delay: 300 });
sr.reveal('.copyright-wrapper', { delay: 200, origin: 'bottom' });
var typed = new Typed('.write', {
    strings:['Ledwin Ezkiel Wotulo'],
    typeSpeed: 70,
    backSpeed: 1,
    backDelay: 5000,
    loop: true
});

ScrollReveal({
    reset: true,
    distance:'90px',
    duration: 2000,
    delay: 1300
})

ScrollReveal().reveal('.container .hero-text h1, .hero-text p', {origin: 'left'});
ScrollReveal().reveal('header, h3', {origin: 'top'});
ScrollReveal().reveal('.social', {origin: 'bottom'});
ScrollReveal().reveal('.hero-text .button', {origin: 'right'});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-list');
let blurHero = document.querySelector('#blur');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
    blurHero.classList.toggle('blur')
};


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const ov = document.querySelector('.overlay')

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    ov.classList.toggle('hidden')
}
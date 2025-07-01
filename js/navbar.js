// navbar.js

// 1) Scroll-Logik für die Navbar (Hintergrund dunkel beim Scrollen)
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// 2) Burger-Menü ein-/ausklappen
document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");

    burgerMenu.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
});

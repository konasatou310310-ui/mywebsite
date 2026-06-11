const hamburger = document.querySelector(".hamburger");
const menuNav = document.querySelector(".menu_nav");
const body = document.body;

if (hamburger && menuNav) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-open");
    menuNav.classList.toggle("is-open");
    body.classList.toggle("menu-open");
  });
}

const menuLinks = document.querySelectorAll(".menu_nav a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("is-open");
    menuNav.classList.remove("is-open");
    body.classList.remove("menu-open");
  });
});
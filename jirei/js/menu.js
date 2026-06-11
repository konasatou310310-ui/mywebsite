
  const header = document.querySelector("header");
  const hamburger = document.querySelector(".hamburger");
  const overlay = document.querySelector(".overlay");
  const menuLinks = document.querySelectorAll(".menu_wrap a");

  hamburger.addEventListener("click", () => {
    header.classList.toggle("open");
  });

  overlay.addEventListener("click", () => {
    header.classList.remove("open");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("open");
    });
  });
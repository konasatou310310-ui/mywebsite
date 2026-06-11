const scrollTopBtn = document.getElementById("scrollTopBtn");
const arrows = document.querySelectorAll(".scroll-indicator .arrow");

function updateScrollIndicator() {
  const scrollTop = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

  if (documentHeight <= 0) return;

  const scrollProgress = scrollTop / documentHeight;

  const activeCount = Math.ceil(scrollProgress * arrows.length);

  arrows.forEach((arrow, index) => {
    arrow.classList.toggle("is-active", index < activeCount);
  });
}

window.addEventListener("scroll", updateScrollIndicator);

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

updateScrollIndicator();
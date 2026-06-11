const headings = document.querySelectorAll("h2");

const headingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-show");
      headingObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

headings.forEach((heading) => {
  headingObserver.observe(heading);
});
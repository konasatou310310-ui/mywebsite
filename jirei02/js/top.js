document.addEventListener('DOMContentLoaded', () => {
  const pageTop = document.querySelector('.page_top');

  if (!pageTop) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      pageTop.classList.add('is-show');
    } else {
      pageTop.classList.remove('is-show');
    }
  });
});
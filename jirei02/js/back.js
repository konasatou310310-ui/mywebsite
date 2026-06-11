const cursorLight = document.querySelector('.cursor-light');

  if (cursorLight) {
    window.addEventListener('pointermove', (event) => {
      document.body.classList.add('is-cursor-active');
      cursorLight.style.left = `${event.clientX}px`;
      cursorLight.style.top = `${event.clientY}px`;
    });

    window.addEventListener('pointerleave', () => {
      document.body.classList.remove('is-cursor-active');
    });
  }
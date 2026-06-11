(() => {
  
  const heroRight = document.getElementById('heroRight');
  const bottom = document.getElementById('bottom');
  const form = document.getElementById('form');

  if (!heroRight || !bottom || !form) return;

  // ==============================
  // スマホ実機の表示領域対策
  // ==============================
  const setViewportHeight = () => {
    const height = window.visualViewport
      ? window.visualViewport.height
      : window.innerHeight;

    document.documentElement.style.setProperty('--vvh', `${height}px`);
  };

  setViewportHeight();

  window.addEventListener('resize', setViewportHeight);

  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', setViewportHeight);
    window.visualViewport.addEventListener('scroll', setViewportHeight);
  }

  // ==============================
  // フレーム非表示制御
  // ==============================
  const visibleSections = {
    bottom: false,
    form: false,
  };

  const updateFrame = () => {
    heroRight.classList.toggle(
      'is-hide-frame',
      visibleSections.bottom || visibleSections.form
    );
  };

  const frameObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === bottom) {
          visibleSections.bottom = entry.isIntersecting;
        }

        if (entry.target === form) {
          visibleSections.form = entry.isIntersecting;
        }
      });

      updateFrame();
    },
    {
      root: null,
      threshold: 0,
      rootMargin: '0px 0px -20% 0px',
    }
  );

  frameObserver.observe(bottom);
  frameObserver.observe(form);
})();
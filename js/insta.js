document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.js-modal-slider');

  sliders.forEach((slider) => {
    const img = slider.querySelector('.js-slide-img');
    const prevBtn = slider.querySelector('.js-slide-prev');
    const nextBtn = slider.querySelector('.js-slide-next');
    const currentText = slider.querySelector('.js-slide-current');
    const totalText = slider.querySelector('.js-slide-total');

    const images = slider.dataset.images
      .split(',')
      .map((image) => image.trim());

    let currentIndex = 0;

    totalText.textContent = images.length;

    function updateSlide() {
      img.src = images[currentIndex];
      img.alt = `制作物 ${currentIndex + 1}枚目`;
      currentText.textContent = currentIndex + 1;
    }

    function showNext(event) {
      event.stopPropagation();
      currentIndex = (currentIndex + 1) % images.length;
      updateSlide();
    }

    function showPrev(event) {
      event.stopPropagation();
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateSlide();
    }

    img.addEventListener('click', showNext);
    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    updateSlide();
  });
});
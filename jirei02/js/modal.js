document.addEventListener('DOMContentLoaded', () => {
  const styleItems = document.querySelectorAll('.style_item[data-modal-img]');
  const styleModal = document.getElementById('styleModal');
  const styleModalImg = document.getElementById('styleModalImg');
  const styleModalClose = document.querySelector('.style_modal_close');
  const styleModalBg = document.querySelector('.style_modal_bg');

  if (!styleItems.length || !styleModal || !styleModalImg || !styleModalClose || !styleModalBg) {
    return;
  }

  function openStyleModal(imgSrc, imgAlt) {
    styleModalImg.src = imgSrc;
    styleModalImg.alt = imgAlt || '';

    styleModal.classList.add('is-open');
    styleModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeStyleModal() {
    styleModal.classList.remove('is-open');
    styleModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');

    setTimeout(() => {
      styleModalImg.src = '';
      styleModalImg.alt = '';
    }, 200);
  }

  styleItems.forEach((item) => {
    const img = item.querySelector('img');

    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');

    item.addEventListener('click', () => {
      const modalImgSrc = item.dataset.modalImg;
      const imgAlt = img ? img.alt : '';

      if (!modalImgSrc) return;

      openStyleModal(modalImgSrc, imgAlt);
    });

    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        item.click();
      }
    });
  });

  styleModalClose.addEventListener('click', closeStyleModal);
  styleModalBg.addEventListener('click', closeStyleModal);

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && styleModal.classList.contains('is-open')) {
      closeStyleModal();
    }
  });
});
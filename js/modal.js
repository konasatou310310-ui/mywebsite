(() => {
    const openBtns = document.querySelectorAll('.js-modal-open');
    const modals = document.querySelectorAll('.js-modal');
    const closeBtns = document.querySelectorAll('.js-modal-close');

    openBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();

        const targetName = btn.dataset.modal;
        const targetModal = document.querySelector(`.js-modal[data-modal="${targetName}"]`);

        if (!targetModal) return;

        targetModal.classList.add('is-active');
        document.body.classList.add('is-modal-open');
      });
    });

    closeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        modals.forEach((modal) => {
          modal.classList.remove('is-active');
        });

        document.body.classList.remove('is-modal-open');
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modals.forEach((modal) => {
          modal.classList.remove('is-active');
        });

        document.body.classList.remove('is-modal-open');
      }
    });
  })();
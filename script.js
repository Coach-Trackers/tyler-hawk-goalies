const dialog = document.querySelector('#coming-soon');
const title = document.querySelector('#dialog-title');

document.querySelectorAll('[data-coming]').forEach((button) => {
  button.addEventListener('click', () => {
    title.textContent = `${button.dataset.coming} is opening soon`;
    dialog.showModal();
  });
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

const guideScreen = document.querySelector('.guide-phone-screen');
const guideImage = guideScreen?.querySelector('img');

document.querySelectorAll('[data-guide-src]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-guide-src]').forEach((tab) => {
      const isActive = tab === button;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
    });
    guideImage.src = button.dataset.guideSrc;
    guideImage.alt = button.dataset.guideAlt;
    guideScreen.scrollTop = 0;
  });
});

document.querySelectorAll('.gallery-content__title-text').forEach((el) => {
  el.addEventListener('click', () => {
    const content = el.nextElementSibling;

    content.classList.toggle('open');
    content.style.maxHeight = content.classList.contains('open') ? content.scrollHeight + "px" : null;
  });
});

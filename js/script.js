document.querySelectorAll('.gallery-content__title-text').forEach((el) => {
  el.addEventListener('click', () => {

    const content = el.nextElementSibling;
    
    if (content.style.maxHeight) {
      document.querySelectorAll('.gallery-content__description-text').forEach((el) => el.style.maxHeight = null)
    } else {
      // document.querySelectorAll('.gallery-content__description-text').forEach((el) => el.style.maxHeight = null)
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
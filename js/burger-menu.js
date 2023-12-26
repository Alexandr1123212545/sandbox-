document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.navigation').classList.toggle('open');
  document.querySelector('.header__content').classList.toggle('d-none');

  const headerElement = document.querySelector('.header');
  if (headerElement.style.background === 'none' || headerElement.style.background === '') {
    headerElement.style.background = 'rgb(68 66 64)';
  } else {
    headerElement.style.background = 'none';
  }
});

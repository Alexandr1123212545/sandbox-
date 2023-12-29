document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.burger-navigation').classList.toggle('open');
  document.querySelector('.navigation').classList.toggle('d-none');
  document.querySelector('.header__content').classList.toggle('d-none');

  const menuClosedBackground = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/header-background.jpg);'
  const menuOpenBackground = 'rgb(68 66 64)'
  const headerElement = document.querySelector('.header');
  const heightWindowClosed = '500px'
  const heightWindowOpen = 'initial'

  if (headerElement.classList.contains('open')) {
    headerElement.style.background = menuOpenBackground;
    headerElement.style.minHeight = heightWindowOpen;
  } else {
    headerElement.style.background = menuClosedBackground;
    headerElement.style.minHeight = heightWindowClosed;
  }
});

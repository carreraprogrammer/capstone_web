const burgerBtn = document.querySelector('.burger-menu');
const navMobile = document.querySelector('.nav-navigation-mobile');
const navLink = document.querySelectorAll('.nav-link');

burgerBtn.addEventListener('click', () => {
  navMobile.classList.toggle('is-active');
  burgerBtn.classList.toggle('is-active');
});

navLink.forEach((link) => link.addEventListener('click', () => {
  navMobile.classList.toggle('is-active');
  burgerBtn.classList.toggle('is-active');
}));

const burgerBtn = document.querySelector(".burger-menu");
const navMobile = document.querySelector(".nav-navigation-mobile");
const isActive = document.querySelectorAll(".is-active");

burgerBtn.addEventListener("click", () => {
  navMobile.classList.toggle("is-active");
  burgerBtn.classList.toggle("is-active");
});


// function onClickMenu() {
//   document.getElementById("hamburger").classList.toggle("change");
//   document.querySelector(".nav-links").classList.toggle("change");
// }

// // Hamburger Menu
const menu = document.getElementById("hamburger");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  menu.classList.toggle("show");
  nav.classList.toggle("show");
});
// change header opacity on scroll
const mainHeader = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    mainHeader.style.opacity = 0.95;
  } else {
    mainHeader.style.opacity = 1;
  }
});

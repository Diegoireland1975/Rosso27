$('[data-fancybox="Michele"]').fancybox({
  loop: true,
  transitionEffect: "zoom-in-out",
  animationDuration: 366,
  transitionDuration: 1000,
  buttons: ["zoom", "slideShow", "fullScreen", "thumbs", "close"],
});

$('[data-fancybox="Las-Vegas"]').fancybox({
  loop: true,
  transitionEffect: "zoom-in-out",
  animationDuration: 366,
  transitionDuration: 1000,
  buttons: ["zoom", "slideShow", "fullScreen", "thumbs", "close"],
});

$('[data-fancybox="Cars"]').fancybox({
  loop: true,
  transitionEffect: "slide",
  animationDuration: 366,
  transitionDuration: 1500,
  buttons: ["zoom", "slideShow", "fullScreen", "thumbs", "close"],
});

// // Hamburger Menu
// const navToggler = document.getElementById("nav-toggler");
// const navLinks = document.getElementById("nav-links");

// navToggler.addEventListener("click", () => {
//   navLinks.classList.toggle("show");
//   navToggler.classList.toggle("rotate");
// });

// change header opacity on scroll
const mainHeader = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    mainHeader.style.opacity = 0.9;
  } else {
    mainHeader.style.opacity = 1;
  }
});

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

// Collapsible
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// Scroll trigger
ScrollTrigger.create({
  trigger: ".trigger",
  start: "top center",
  end: "+=500",
  onUpdate: (self) => console.log("direction:", self.direction),
});

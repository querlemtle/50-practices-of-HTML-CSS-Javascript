const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

setBodyBackground();

rightBtn.addEventListener("click", (event) => {
  activeSlide >= slides.length - 1 ? (activeSlide = 0) : activeSlide++;
  setBodyBackground();
  setActiveSlide();
});

leftBtn.addEventListener("click", (event) => {
  activeSlide <= 0 ? (activeSlide = slides.length - 1) : activeSlide--;
  setBodyBackground();
  setActiveSlide();
});

function setBodyBackground() {
  body.style.backgroundImage = window
    .getComputedStyle(slides[activeSlide], `:nth-child(${activeSlide + 1})`)
    .getPropertyValue("background-image");
}

function setActiveSlide() {
  for (let slide of slides) {
    slide.classList.remove("active");
  }
  slides[activeSlide].classList.add("active");
}

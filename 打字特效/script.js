const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const bubbleEl = document.querySelector(".bubble");

const text = "We love programming!";
let index = 1;
let speed = 300 / speedEl.value;

setBubble(speedEl, bubbleEl);
writeText();

speedEl.addEventListener("input", (event) => {
  speed = 300 / event.target.value;
})

speedEl.addEventListener("input", (event) => {
  setBubble(event.target, bubbleEl);
});

function writeText() {
  textEl.textContent = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 1;
  }

  setTimeout(writeText, speed);
}

// https://css-tricks.com/value-bubbles-for-range-inputs/
function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}
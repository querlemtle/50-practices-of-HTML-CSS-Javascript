const container = document.getElementById("container");

const SQUARE_AMOUNT = 400;

for (let index = 0; index < SQUARE_AMOUNT; index++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = `#333`;
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const colors = ["#88EF43", "#FAF33E", "#FFA552", "#A73DB8", "#F6134C", "#1E96FC"];
  return colors[Math.floor(Math.random() * colors.length)];
}
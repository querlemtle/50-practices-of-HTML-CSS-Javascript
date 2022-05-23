const picture = document.getElementById("clickable-pic");
const times = document.getElementById("times");

let timesClicked = 0;

picture.addEventListener("dblclick", (event) => {
  createSymbol(event);
});

const createSymbol = (event) => {
  const thumbsUp = document.createElement("i");
  thumbsUp.classList.add("fa-solid", "fa-thumbs-up", "thumbs-up");

  const x = event.clientX;
  const y = event.clientY;
  const leftOffset = event.target.offsetLeft;
  const topOffset = event.target.offsetTop;
  const xInsideImg = x - leftOffset;
  const yInsideImg = y - topOffset;

  thumbsUp.style.top = `${yInsideImg}px`;
  thumbsUp.style.left = `${xInsideImg}px`;

  picture.appendChild(thumbsUp);

  times.textContent = ++timesClicked;
  setTimeout(() => thumbsUp.remove(), 1000);
}
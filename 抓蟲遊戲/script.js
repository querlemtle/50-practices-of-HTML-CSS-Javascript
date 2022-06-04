const screenNodes = document.querySelectorAll(".screen");
const chooseBugBtnNodes = document.querySelectorAll(".choose-bug-btn");
const startBtn = document.querySelector(".start-btn");
const gameContainer = document.querySelector(".game-container");
const timeEl = document.querySelector("#time");
const scoreEl = document.querySelector("#score");
const messageEl = document.querySelector("#message");
let seconds = 0;
let score = 0;
let selectedBug = {};

startBtn.addEventListener("click", () => switchScreen(0));


for (const btn of chooseBugBtnNodes) {
  btn.addEventListener("click", (event) => {
    getBugImage(event.target);
    switchScreen(1);
    setTimeout(createBug, 1000);
    startGame();
  });
}

function switchScreen(index) {
  screenNodes[index].classList.add("screen-up");
}

function getBugImage() {
  let src;
  let alt;
  if (event.target.tagName === "IMG") {
    src = event.target.src;
    alt = event.target.alt;
  } else {
    const bugImage = event.target.parentElement.querySelector("img");
    src = bugImage.src;
    alt = bugImage.alt;
  }
  selectedBug = { src, alt };
}

function createBug() {
  const bug = document.createElement("div");
  bug.classList.add("bug");
  const { x, y } = getRandomLocation();
  bug.style.top = `${y}px`;
  bug.style.left = `${x}px`;
  bug.innerHTML = `
    <img src="${selectedBug.src}" alt="${selectedBug.alt}"
    style="transform: rotate(${Math.random() * 360}deg)">
  `;
  bug.addEventListener("click", catchBug);
  gameContainer.appendChild(bug);
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
}

function catchBug() {
  let increaseScore = () => {
    score++;
    scoreEl.textContent = `分數： ${score}`;
    if (score > 19) {
      messageEl.classList.add("visible");
    }
  };
  increaseScore();
  this.classList.add("caught");
  setTimeout(this.remove(), 2000);
  addBug();
}

function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  let minute = Math.floor(seconds / 60);
  let second = seconds % 60;
  minute = minute.toString().padStart(2, "0");
  second = second.toString().padStart(2, "0");
  timeEl.textContent = `時間：${minute}:${second}`;
  seconds++;
}

function addBug() {
  setTimeout(createBug, 1000);
  setTimeout(createBug, 1500);
}
const images_container = document.getElementById("imgs");
const buttons_container = document.querySelector(".buttons-container");
const leftBtn = document.getElementById("left-button");
const rightBtn = document.getElementById("right-button");
const imageNodes = document.querySelectorAll("img");

let index = 0;
let interval = setInterval(run, 3000);

const flipThroughImages = (event) => {
  const clickedButton = event.target;
  if (clickedButton === leftBtn) {
    index--;
    changeImage();
    resetInterval();
  } else if (clickedButton === rightBtn) {
    index++;
    changeImage();
    resetInterval();
  }
};

buttons_container.addEventListener("click", flipThroughImages);

function run() {
  index++;
  changeImage();
}

function changeImage() {
  if (index > imageNodes.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = imageNodes.length - 1;
  }

  images_container.style.transform = `translateX(${-index * 350}px)`;
}

// 當點擊任一按鈕，重設 interval
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 3000);
}

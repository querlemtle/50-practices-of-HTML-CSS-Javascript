const boxes = document.querySelectorAll(".box");

setBoxesColor();

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if(boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

function getRandomColor() {
  let r = Math.random() * 255; 
  let g = Math.random() * 255; 
  let b = Math.random() * 255; 
  return `rgb(${r},${g},${b})`;
}

function setBoxesColor(){
  boxes.forEach((box) => {
    box.style.backgroundColor = getRandomColor();
  });
}
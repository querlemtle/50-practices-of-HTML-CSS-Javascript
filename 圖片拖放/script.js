const food = document.querySelector(".food");
const plates = document.querySelectorAll(".plate");

food.addEventListener("dragstart", dragStart);
food.addEventListener("dragend", dragEnd);

for (const plate of plates) {
  plate.addEventListener("dragover", dragOver);
  plate.addEventListener("dragenter", dragEnter);
  plate.addEventListener("dragleave", dragLeave);
  plate.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.classList.add("hold");
  setTimeout(() => this.className = "", 0);
}

function dragEnd() {
  this.classList.add("food");
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.preventDefault();
  this.classList.add("hovered");
}

function dragLeave() {
  this.classList.remove("hovered");
}

function dragDrop() {
  this.className = "plate";
  this.append(food);
}
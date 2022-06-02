const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navNodes = document.querySelectorAll(".nav");

openBtn.addEventListener("click", () => {
  for (let navEl of navNodes) {
    navEl.classList.add("visible");
  }
});

closeBtn.addEventListener("click", () => {
  for (let navEl of navNodes) {
    navEl.classList.remove("visible");
  }
});
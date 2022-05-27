const numbers = document.querySelectorAll(".number");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector("#replay");

runAnimation();
replay.addEventListener("click", (event) => {
  resetDOM();
  runAnimation();
});

function runAnimation() {
  numbers.forEach((number, index) => {
    const nextToLast = numbers.length - 1;

    number.addEventListener("animationend", (event) => {
      if (event.animationName === "goIn" && index !== nextToLast) {
        number.classList.remove("go-in");
        number.classList.add("go-out");
      } else if (event.animationName === "goOut" && number.nextElementSibling) {
        number.nextElementSibling.classList.add("go-in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}

function resetDOM() {
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");
  for (const number of numbers) {
    number.classList.remove("go-out", "go-in");
  }
  numbers[0].classList.add("go-in");
}
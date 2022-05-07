const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");
const drinkingGoal = 2;
const volumePerCup = 250;
const bigCupHeight = 300;

updateBigCup();

smallCups.forEach((cup, index) => {
  cup.addEventListener("click", () => {
    highlightCups(index);
    updateBigCup();
  });
});

function highlightCups(clickedCupIndex) {
  if (
    smallCups[clickedCupIndex].classList.contains("full") &&
    !smallCups[clickedCupIndex].nextElementSibling.classList.contains("full")
  ) {
    clickedCupIndex--;
  }
  smallCups.forEach((cup, index) => {
    cup.classList[index <= clickedCupIndex ? "add" : "remove"]("full");
  });
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const smallCupsAmount = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${
      (fullCups / smallCupsAmount) * bigCupHeight
    }px`;
    percentage.innerText = `${(fullCups / smallCupsAmount) * 100}%`;
  }

  if (fullCups === smallCupsAmount) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${drinkingGoal - (volumePerCup * fullCups) / 1000} L`;
  }
}

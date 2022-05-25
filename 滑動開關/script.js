const allToggles = document.querySelectorAll(".toggle");
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

allToggles.forEach(toggle => {
  toggle.addEventListener("change", (event) => forcedTurnedOffLastToggle(event.target));
});

function forcedTurnedOffLastToggle(clickedToggle) {
  if (good.checked && cheap.checked && fast.checked) {
    switch (clickedToggle) {
      case good:
        fast.checked = false;
        break;
      case cheap:
        good.checked = false;
        break;
      case fast:
        cheap.checked = false;
        break;
    }
  }
}
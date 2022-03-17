const counters = document.querySelectorAll(".counter");

for (let counter of counters) {
  counter.textContent = "0";
  updateCounter(counter);
}

function updateCounter(counter) {
  const target = +counter.getAttribute("data-target");
  let base = +counter.textContent;
  const segmentation = 100;
  const increment = target / segmentation;

  const increaseCounter = setInterval(() => {
    if (base < target) {
      base = base + increment;
      counter.textContent = base.toString();
    } else {
      clearInterval(increaseCounter);
    }
  }, 30);

}
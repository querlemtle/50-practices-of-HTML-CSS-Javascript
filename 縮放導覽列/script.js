const nav = document.getElementById("nav");
const toggleBtn = document.getElementById("toggle");

toggleBtn.addEventListener("click", (e) => {
  nav.classList.toggle("active");
});
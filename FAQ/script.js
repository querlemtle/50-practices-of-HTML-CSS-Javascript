const toggleButtons = document.querySelectorAll(".faq-toggle");

toggleButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.closest(".faq").classList.toggle("active");
  });
});
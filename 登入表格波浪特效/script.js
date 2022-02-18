const labels = document.querySelectorAll(".form-control label");
const inputs = document.querySelectorAll(".form-control input");

labels.forEach((label) => {
  label.innerHTML = label.innerText.split("").map((letter, index) => {
    return `<span style="transition-delay:${index * 35}ms">${letter}</span>`
  }).join("");
});

inputs.forEach((input) => {
  input.addEventListener("invalid", (e) => {
    e.target.classList.add("invalid");
  });
});

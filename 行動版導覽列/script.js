const contentNodes = document.querySelectorAll(".content");
const navItemNodes = document.querySelectorAll(".nav-item");

navItemNodes.forEach((item, index) => {
  item.addEventListener("click", () => {
    hideAllContents();
    hideAllItems();

    item.classList.add("active");
    contentNodes[index].classList.add("show");
  });
});

function hideAllContents() {
  contentNodes.forEach(item => item.classList.remove("show"));
}


function hideAllItems() {
  navItemNodes.forEach(item => item.classList.remove("active"));
}
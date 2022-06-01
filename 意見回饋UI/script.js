const sendBtn = document.getElementById("send-btn");
const ratings = document.querySelectorAll(".rating");
const panelContainer = document.getElementById("panel-container");
const ratingContainer = document.querySelector(".rating-container");
let selectedRating = "滿意";

ratingContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("rating") || event.target.parentNode.classList.contains("rating")) {
    removeActive();
    event.target.closest(".rating").classList.add("active");
    selectedRating = event.target.closest(".rating").dataset.rating;
  }
});

sendBtn.addEventListener("click", (event) => {
  panelContainer.innerHTML = `
    <i class="fa-solid fa-heart heart-symbol"></i>
    <h2>感謝您的意見回饋！</h2>
    <p>我們將根據您的評分（${selectedRating}）改進客戶服務。</p>
  `;
})

function removeActive() {
  for (let index = 0; index < ratings.length; index++) {
    ratings[index].classList.remove("active");
  }
}
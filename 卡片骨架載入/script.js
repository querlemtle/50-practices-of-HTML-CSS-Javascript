const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const author_img = document.getElementById("author_img");
const author_name = document.getElementById("author_name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = `<img class="card-img" src="https://source.unsplash.com/random" alt="card-img">`;
  title.textContent = `雁長戰原上青山`;
  excerpt.textContent = `夜芙爭天誰能使人，漢家風沙聞道。劍閣風停孤復歸客十琵琶二盡，歸誰青風劍。`;
  author_img.innerHTML = `<img src="https://randomuser.me/api/portraits/lego/5.jpg" alt="author-img">`;
  author_name.textContent = `王文豪`;
  date.textContent = `2022/5/18`;

  animated_bgs.forEach(bg => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach(bg => bg.classList.remove("animated-bg-text"));
}
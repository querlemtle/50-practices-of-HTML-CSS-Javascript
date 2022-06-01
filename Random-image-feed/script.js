const container = document.querySelector(".container");
const loadMoreBtn = document.querySelector(".load-more");
const unsplashURL = `https://source.unsplash.com/random`;
const rows = 2;
const imagePerRow = 3;

getImages();
loadMoreBtn.addEventListener("click", getImages);

function getImages() {
  for (let index = 0; index < rows * imagePerRow; index++) {
    const img = document.createElement("img");
    let getRandomSize = (multiplier, basicSize) => {
      const randomNum = Math.floor(Math.random() * multiplier) + basicSize;
      return `${randomNum}x${randomNum}`;
    };

    img.src = `${unsplashURL}/${getRandomSize(100, 300)}`;
    container.appendChild(img);
  }
}

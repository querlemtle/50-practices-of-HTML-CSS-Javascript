const API_URL =
  "https://api.themoviedb.org/3/discover/tv?api_key=61abf01b6db5407dcec51383cb3ce237&sort_by=popularity.desc&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/original";
const SEARCH_API = `https://api.themoviedb.org/3/search/tv?api_key=61abf01b6db5407dcec51383cb3ce237`;

const searchForm = document.getElementById("search");
const searchInput = document.getElementById("search__input");
const showsWrapper = document.getElementById("shows-wrapper");

// Get initial shows
getTVShows(API_URL);

async function getTVShows(url) {
  const res = await fetch(url);
  const data = await res.json();
  showTVShows(data.results);
}

function showTVShows(data) {
  let cardHTML = "";
  data.forEach((show) => {
    const { name, poster_path, vote_average, overview } = show;
    cardHTML += `<div class="card">
                  <img
                    src="${IMG_PATH + poster_path}"
                    alt="${name}" class="card__img">
                  <div class="card__flex">
                    <h3 class="card__title">${name}</h3>
                    <span class="card__rate card__rate--${getClassByRate(
                      vote_average
                    )}">${vote_average}</span>
                  </div>
                  <div class="card__flex card__flex--hover">
                    <h3 class="card__overview">Overview</h3>
                    <p class="card__description">${overview || "N/A"}</p>
                  </div>
                </div>`;
    showsWrapper.innerHTML = cardHTML;
  });
}

function getClassByRate(vote) {
  let rateColor = vote >= 8 ? "green" : (vote >= 5 ? "orange" : "red");
  return rateColor;
}

// Search database
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value;

  if (searchTerm && searchTerm.trim() !== "") {
    getTVShows(`${SEARCH_API}&query="${searchTerm}"`);
    searchInput.value = "";
  } else {
    window.location.reload();
  }
});

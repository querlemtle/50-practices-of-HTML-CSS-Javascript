const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

generateJoke();

jokeBtn.addEventListener("click", generateJoke);

function generateJoke() {
  const config = {
    headers: {
      "Accept": "application/json"
  }
}

  fetch("https://icanhazdadjoke.com", config)
    .then((response) => response.json())
    .then((data) => {
      jokeEl.innerText = data.joke;
    }); 
}

// Using Async/await
/* 
async function generateJoke() {
  const config = {
    headers: {
      "Accept": "application/json"
  }
  const response = await fetch("https://icanhazdadjoke.com", config);
  const data = await response.json();
  jokeEl.innerText = data.joke;
}
*/

const sounds = ["rain", "flame", "space", "forest", "train", "wave"];
const background = document.querySelector(".background");

sounds.forEach((sound) => {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = sound;
  document.getElementById("buttons").appendChild(button);

  button.addEventListener("click", (e) => {
    changeBackground(sound);
    stopSongs();
    document.getElementById(sound).play();
  });
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}

function changeBackground(name) {
  background.setAttribute("type", name);
  background.style.backgroundImage = `url(images/${name}.jpg)`;
}
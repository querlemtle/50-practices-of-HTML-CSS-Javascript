const APIURL = "https://api.github.com/users";
const main = document.getElementById("main");
const form = document.getElementById("form");
const searchInput = document.getElementById("search");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = searchInput.value;
  if (user) {
    getUser(user);
    searchInput.value = "";
  }
})

async function getUser(username) {
  try {
    const { data } = await axios(`${APIURL}/${username}`);
    createUserCard(data);
    getRepos(username);
  } catch (error) {
    if (error.response.status === 404) {
      createErrorCard("找不到對應使用者");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(`${APIURL}/${username}/repos?sort=created`);
    addReposToCard(data);
  } catch (error) {
    createErrorCard("Problem fetching repos");
  }
}

function createUserCard(user) {
  const cardHTML = `<div class="card">
      <div>
        <img src="${user.avatar_url}" alt="${user.login}" class="avatar">
      </div>
      <div class="user-info">
        <h2 class="user-name">${user.name || user.login}</h2>
        <p>${user.bio || "無簡介"}</p>
        <ul class="user-stats">
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>
        <div class="repos" id="repos"></div>
      </div>
    </div>`;
  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const cardHTML = `<div class="card">
      <h2>${msg}</h2>
    </div>`;
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  if (repos.length === 0) {
    reposEl.innerHTML = `<p>無 repo 可顯示</p>`;
  } else {
    repos
      .slice(0, 5)
      .forEach(repo => {
        const repoEl = document.createElement("a");
        repoEl.classList.add("repo");
        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.textContent = repo.name;

        reposEl.appendChild(repoEl);
      });
  }
}
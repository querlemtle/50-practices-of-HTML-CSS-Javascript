const result = document.getElementById("result");
const filter = document.getElementById("filter");
const URL = "https://randomuser.me/api";
const listItems = [];

getData();

filter.addEventListener("input", (event) => {
  filterData(event.target.value);
});

async function getData() {
  const res = await fetch(`${URL}?results=50`);
  const { results } = await res.json();

  // 清除結果
  result.innerHTML = "";

  results.forEach(user => {
    const li = document.createElement("li");
    listItems.push(li);
    li.classList.add("user");
    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}" />
          <div class="user-info">
            <h4 class="user-name">${user.name.first} ${user.name.last}</h4>
            <p class="user-location">${user.location.city}, ${user.location.country}</p>
          </div>
    `;
    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItems.forEach(item => {
    if (item.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
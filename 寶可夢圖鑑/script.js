const card_container = document.getElementById("card-container");
const pokemon_count = 150;
const typesVisual = [
  {
    name: "fire",
    color: "#FDDFDF",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/768px-Pok%C3%A9mon_Fire_Type_Icon.svg.png?20200511092324"
  },
  {
    name: "grass",
    color: "#DEFDE0",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/180px-Pok%C3%A9mon_Grass_Type_Icon.svg.png"
  },
  {
    name: "electric",
    color: "#FCF7DE",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/180px-Pok%C3%A9mon_Electric_Type_Icon.svg.png"
  },
  {
    name: "water",
    color: "#DEF3FD",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/180px-Pok%C3%A9mon_Water_Type_Icon.svg.png"
  },
  {
    name: "ground",
    color: "#f4e7da",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/180px-Pok%C3%A9mon_Ground_Type_Icon.svg.png"
  },
  {
    name: "rock",
    color: "#d5d5d4",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/180px-Pok%C3%A9mon_Rock_Type_Icon.svg.png"
  },
  {
    name: "fairy",
    color: "#fceaff",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/180px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png"
  },
  {
    name: "poison",
    color: "#e9d1f0",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/180px-Pok%C3%A9mon_Poison_Type_Icon.svg.png"
  },
  {
    name: "bug",
    color: "#F2F6CB",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/180px-Pok%C3%A9mon_Bug_Type_Icon.svg.png"
  },
  {
    name: "dragon",
    color: "#D5E9EC",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/180px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png"
  },
  {
    name: "psychic",
    color: "#FDD8E3",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/180px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png"
  },
  {
    name: "flying",
    color: "#E3DBFA",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/180px-Pok%C3%A9mon_Flying_Type_Icon.svg.png"
  },
  {
    name: "fighting",
    color: "#F5CECC",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/180px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png"
  },
  {
    name: "normal",
    color: "#E7E7DA",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/180px-Pok%C3%A9mon_Normal_Type_Icon.svg.png"
  }
];

const fetchPokemons = async () => {
  // 以迴圈取得編號(id) 1~150 的寶可夢資料
  for (let index = 1; index <= pokemon_count; index++) {
    await getPokemon(index);
  }
};

const getPokemon = async (id) => {
  const name_url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
  const info_url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  // 取得寶可夢中文名稱與 id
  const name_res = await fetch(name_url);
  // 取得寶可夢屬性
  const info_res = await fetch(info_url);
  const name_data = await name_res.json();
  const info_data = await info_res.json();
  createPokemonCard(name_data, info_data);
}

const createPokemonCard = (...pokemon) => {
  // 將回傳屬性整理到 types 這個陣列
  const typesArray = pokemon[1].types;
  const targetTypes = typesArray.map(data => data.type).map(item => item.name);

  // 比對 types 和 typesVisual，找出 typesVisual 裡名稱跟 types 相等的物件，另外存取
  let typesTemp = [];
  typesVisual.forEach(element => {
    if (targetTypes.includes(element.name)) {
      typesTemp.push(element);
    }
  });

  let getTypeIcons = (types) => {
    let imgHTML = ``;
    for (const type of types) {
      imgHTML += `<img src="${type.icon}" alt="" class="icon"/>`;
    };
    return imgHTML;
  }

  let renderCardBackground = (types, element) => {
    switch (types.length) {
      case 1:
        element.style.backgroundColor = types[0].color;
        break;
      case 2:
        element.style.backgroundImage = `linear-gradient(to bottom, ${types[0].color} 50%, ${types[1].color} 50%)`;
        break;
    }
  };

  // 整理回傳資料，渲染到 DOM 上
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("card");

  const padded_id = pokemon[0].id.toString().padStart(3, "0");
  const pokemonInnerHTML = `
    <div class="img-container">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon[0].id}.png" alt="${pokemon[0].names[3].name}">
    </div>
    <div class="info">
      <span class="number">#${padded_id}</span>
      <h3 class="name">${pokemon[0].names[3].name}</h3>
      <p>屬性：${getTypeIcons(typesTemp)}</p>
    </div>`;
  pokemonEl.innerHTML = pokemonInnerHTML;
  renderCardBackground(typesTemp, pokemonEl);
  card_container.appendChild(pokemonEl);
};

fetchPokemons();


import '../css/style.css'
import { DOMSelectors } from '../js/dom.js'


const url = "https://rickandmortyapi.com/api/character";




async function getData(url) {
  try {
    const response = await fetch(url);
    const Data = await response.json();
    return Data.results;
  } catch (error) {
    console.log(error);
  }
}
//reminder add some error codes if there is a wrong input//

function defaultCardGenerate(filtercharacters) {
    filtercharacters.forEach((characters) => {
      DOMSelectors.cards.insertAdjacentHTML(
        "beforeend",
        `<div class="card" id="${characters.name
          .toLowerCase()
          .replace(/ /g, "")}">
          <h2 class="characterName">${characters.name}</h2>
          <img class="img" src="${characters.image}" alt="${characters.name}"class="img"/><img>
          <div class="text">
          <h3>${characters.status}</h3>
          <h3>${characters.origin.name}</h3>
          </div>
      </div>`
      );
    });
  }
  

  async function main() {
    var filtercharacters = await getData(url);
    defaultCardGenerate(filtercharacters);
  }
  main();

  async function search() {
  const character = await document.getElementById("input").value.toLowerCase();
  const charactercards = await document.getElementsByClassName("card");
  for (var i = charactercards.length - 1; i >= 0; i--) {
    if (!charactercards[i].id.includes(character)) {
      charactercards[i].style.display = "none";
    } else {
      charactercards[i].style.display = "";
    }
  }
}

 
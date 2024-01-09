import '../css/style.css'
import { DOMSelectors } from '../js/dom.js'


const url = "https://rickandmortyapi.com/api/character";
//find better api than rick and morty as this shit is outdated at least this does not have an api key so this might stay//



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
          <img class="img" src="${characters.image}"/>
          <div class="text">
          <h3>${characters.status}</h3>
          <h3>${characters.origin.name}</h3>
          </div>
      </div>`
      );
    });
  }
  
  //remeber to have the text before the status add this latter//
  async function main() {
    var filtercharacters = await getData(url);
    defaultCardGenerate(filtercharacters);
  }
  main();
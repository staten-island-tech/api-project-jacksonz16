import '../css/style.css'
import { DOMSelector } from '../js/dom.js'
const URL = "https://rickandmortyapi.com/api/character/";

async function getData(URL) {
  try {
   let  responsing = await fetch(URL);

    if (!responsing.ok) {
      DOMSelector.cards.innerHTML = "";
      DOMSelector.error.innerHTML = "";
      if (responsing.status === 400) {
        throw new Error("Error 400: Bad Request" + `<p>WHAT ARE YOU ASKING FOR.</p>`
        );
      } else if (responsing.status === 403) {
        throw new Error("Error 403: Access Forbidden" + `<p>Your device SEEMS TO HAVE BEEN BANED BY THE API</p>`
        );
      } else if (responsing.status === 404) {
        throw new Error("Error 404: Not Found" + `<p>SPELL THE NAMES CORRECTLY<p>`
        );
      } else {
        throw new Error(`Error ${responsing.status}`);
      };
    };
    const data = await responsing.json();
  DOMSelector.cards.innerHTML = "";
  DOMSelector.error.innerHTML = "";

  console.log(data);

  data.results.forEach(cards => {
    DOMSelector.cards.insertAdjacentHTML(
      "beforeend",
      `
        <div class="card">
        <h2 class="characterName">${cards.name}</h2>
        <img src="${cards.image}" alt="${cards.name}"class="img"/>
        <div class="text">
        <h3>${cards.status}</h3>
        <h3>${cards.origin.name}</h3>
        </div>
        `
      );
    });
  } catch (error) {
    console.log(error);
    DOMSelector.error.insertAdjacentHTML(
      "beforeend",
      `
        <h3>${error.message}</h3>
      `
    );
  };
};
getData("https://rickandmortyapi.com/api/character/")

DOMSelector.searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const  character = DOMSelector.searchBar.value
    const URL = "https://rickandmortyapi.com/api/character/?name="+character
    console.log(fetch(URL));
    getData(URL);
  });
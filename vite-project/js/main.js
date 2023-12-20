import '../css/style.css'

const URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=32d4d8eb5d3a4d59bbbef34cda51f943&page=1";
console.log(fetch(URL))


    try{
        const response =await fetch (URL);
        const data =await response.json();
        console.log(data);
    }catch(error){console.log(error)}

getData(URL);

async function getData(URL) {
    try {
        const response = await fetch(URL + "?" + new URLSearchParams({
         

        }));
        if (response.status != 200) {
            throw new Error(response.statusText);
        }
        const info = await response.json();
        console.log(info);

        data.movie.forEach((movie) => data.push(movie));


    } catch (error) {
        console.log(error);
        document.querySelector("h1").textContent = "work technology work";
    }
}
getData(URL);

function insert(data) {
    data.forEach((x) => {
        DOMSelectors.container_2.insertAdjacentHTML(
            "beforebegin",
            `<div class= "card">
    <h2 class= "title">${x.title}</h2>
    <img scr="${x.image}" class="cardimg">
    <h3 class=" movie" >${"movie" + x.movie}</h3>
    <h3 class= "movielength " >${"Minutes" + x.movielength}</h3>
    </div>`
        )
    })
};



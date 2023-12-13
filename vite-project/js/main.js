const URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=32d4d8eb5d3a4d59bbbef34cda51f943&page=1";
console.log(fetch(URL))

async function getData(URL){
    try{
        const response =await fetch (URL);
        const data =await response.json();
        console.log(data);
    }catch(error){console.log(error)}
    const URL =data
    .filter((anime)=>anime.score>8.0)
    .forEach((animes)=>console.log(animes.title_english))
}
getData(URL);
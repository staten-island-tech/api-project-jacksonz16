fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=32d4d8eb5d3a4d59bbbef34cda51f943&page=2")
    .then(response => response.json())
    .then(quote => console.log(quote))
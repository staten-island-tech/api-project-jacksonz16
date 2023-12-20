fetch("https://genshinlist.com/api/characters")
    .then(response => response.json())
    .then(quote => console.log(quote))
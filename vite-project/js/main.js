fetch('https://gsi.fly.dev/')
    .then(response => response.json())
    .then(quote => console.log(quote))
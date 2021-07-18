

// text.innerHTML = 'New Quote';

// 102 <- Generate a number from 0 to 102


let colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
];

let btnClick=(e)=> {
    console.log('something')
    console.log(e);

    const QUOTES_API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

    // when you console log it
    // {...} (102)

    // https://360macky.github.io/rqm/index.html

    fetch(QUOTES_API).then(response => response.json()).then(data => {
        let allInfo = data.quotes;
        const text = document.getElementById('text');
        const author = document.getElementById('author');
        const body = document.getElementById('body');
        const btn = document.getElementById('new-quote');
        

        // change the background with JS
    
        let colorIndex = generateIndexNumberForBackground();
        body.style.backgroundColor = colors[colorIndex];
        btn.style.backgroundColor = colors[colorIndex];
        text.style.color = colors[colorIndex];

    

        // chichiglacierz

        // https://360macky.github.io/rqm/style.css

        // https://360macky.github.io/rqm/index.js
        // Press CTRL+R <- Refresh the changes

        let randomNumber = generateRandomNumber();

        text.innerText = allInfo[randomNumber].quote;
        author.innerText = allInfo[randomNumber].author;
        // extract the quote, put the quote in the #text paragraph
    });
    // generateRandomNumber();

}

function generateRandomNumber() {
    return Math.floor(Math.random() * 102);
}

function generateIndexNumberForBackground() {
    return Math.floor(Math.random() * 12);
}




// https://codesandbox.io/s/random-quote-machine-6hlmh

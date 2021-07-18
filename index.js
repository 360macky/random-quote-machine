

// 102 <- Generate a number from 0 to 102

// generates random colors from this array
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

const tweetquote = document.getElementById('tweet-quote');

//when the twitter icon is pressed, user is routed to their page and is shown the random quote
function updateLinkTweet(text) {
    
    
    let link = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(text)}`;

    tweetquote.href = link;

    // https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Two%20roads%20diverged%20in%20a%20wood%2C%20and%20I%E2%80%94I%20took%20the%20one%20less%20traveled%20by%2C%20And%20that%20has%20made%20all%20the%20difference.%22%20Robert%20Frost
    
}

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
        const btnTweet = document.getElementById('tweet-button');



        

        // change the background with JS
    
        let colorIndex = generateIndexNumberForBackground();
        body.style.backgroundColor = colors[colorIndex];
        btnTweet.style.backgroundColor = colors[colorIndex];
        btn.style.backgroundColor = colors[colorIndex];
        text.style.color = colors[colorIndex];
    
        // Change the href attribute from the <a> twitter button.
        
        // chichiglacierz
        
        // https://360macky.github.io/rqm/style.css
        
        // https://360macky.github.io/rqm/index.js
        // Press CTRL+R <- Refresh the changes
        
        let randomNumber = generateRandomNumber();
        
        text.innerText = allInfo[randomNumber].quote;
        author.innerText = allInfo[randomNumber].author;
        updateLinkTweet(allInfo[randomNumber].quote);

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

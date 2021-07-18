

// text.innerHTML = 'New Quote';

// 102 <- Generate a number from 0 to 102


let btnClick=(e)=> {
    console.log('something')
    console.log(e);

    const QUOTES_API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

    // when you console log it
    // {...} (102)

    fetch(QUOTES_API).then(response => response.json()).then(data => {
        let allInfo = data.quotes;
        const text = document.getElementById('text');
        const author = document.getElementById('author');

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




// https://codesandbox.io/s/random-quote-machine-6hlmh

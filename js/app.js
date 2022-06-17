// Random Quote Generator: HTML, CSS, JS, API

// Grab elements
const getQuoteButton = document.getElementById('button');

// Add event listener
getQuoteButton.addEventListener('click', getQuote);

// Create getQuotes function
async function getQuote() {
  //api for quotes
  var url = "https://type.fit/api/quotes";

  // fetch the data from api
  const response = await fetch(url);

  //  Conver response to JSON array
  const quotes = await response.json();

  // Use Math.floor to be to select one item at a time from array
  const idx = Math.floor(Math.random() * quotes.length);

  // Store each element from object to a variable for use
  const quote = quotes[idx].text;
  const author = quotes[idx].author;

  let output = '';
  output += `<h1>${quote}</h1>
  <p>${author}</p>`;

  document.getElementById('output').innerHTML = output;

};

getQuote();

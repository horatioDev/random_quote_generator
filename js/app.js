// Random Quote Generator: HTML, CSS, JS, API

// Grab elements
const text = document.getElementById('text');
const author = document.getElementById('author');
const button = document.getElementById('button');

// Add event listener
button.addEventListener('click', getQuotes);

// Create getQuotes function
function getQuotes() {
  // Fetch Request
  fetch("https://type.fit/api/quotes")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let textOutput = '';
      let authorOutput = '';
      // Loop through data
      data.forEach(quote => {
        textOutput += `<p>${quote.text}</p>`
        authorOutput += `<p>${quote.author}</p>`
      });
      // Append to browser
      text.innerHTML = textOutput;
      author.innerHTML = authorOutput;

    });
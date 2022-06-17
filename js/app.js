// Random Quote Generator: HTML, CSS, JS, API

// Grab elements
const text = document.getElementById('text');
const quote = document.getElementById('quote');
const button = document.getElementById('button');

// Add event listener
button.addEventListener('click', getQuotes);

// Create getQuotes function
function getQuotes() {
  console.log('clicked');

};

// Fetch Request
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });
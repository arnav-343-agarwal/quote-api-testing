const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

async function getQuote() {
  quoteText.textContent = "Loading...";
  authorText.textContent = "";
  try {
    const res = await fetch("https://dummyjson.com/quotes/random");
    const data = await res.json();
    quoteText.textContent = `"${data.quote}"`;
    authorText.textContent = `— ${data.author}`;
  } catch (err) {
    quoteText.textContent = "Failed to fetch quote. Try again.";
  }
}

newQuoteBtn.addEventListener("click", getQuote);

// Load a quote on start
getQuote();

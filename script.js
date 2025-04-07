const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const timingEl = document.getElementById("timing");

document.addEventListener("DOMContentLoaded", () => {
  getQuote();
});

async function getQuote() {
  resetDisplay();

  const startTime = performance.now();

  try {
    const data = await fetchQuote();
    const timeTaken = (performance.now() - startTime).toFixed(2);
    displayQuote(data, timeTaken);
  } catch (error) {
    handleError(error);
  }
}

function resetDisplay() {
  quoteEl.textContent = "Fetching quote...";
  authorEl.textContent = "";
  timingEl.textContent = "";
}

async function fetchQuote() {
  const response = await fetch("https://dummyjson.com/quotes/random");
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  return await response.json();
}

function displayQuote(data, time) {
  quoteEl.textContent = `"${data.quote}"`;
  authorEl.textContent = `— ${data.author}`;
  timingEl.textContent = `⏱️ Fetched in ${time} ms`;
}

function handleError(error) {
  quoteEl.textContent = "Failed to load quote.";
  console.error("Quote fetch error:", error);
}

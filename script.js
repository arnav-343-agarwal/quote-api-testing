async function getQuote() {
  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");
  const timingEl = document.getElementById("timing");

  quoteEl.textContent = "Fetching quote...";
  authorEl.textContent = "";
  timingEl.textContent = "";

  const startTime = performance.now();

  try {
    const res = await fetch("https://dummyjson.com/quotes/random");
    const data = await res.json();
    const endTime = performance.now();

    const timeTaken = (endTime - startTime).toFixed(2);

    quoteEl.textContent = `"${data.quote}"`;
    authorEl.textContent = `— ${data.author}`;
    timingEl.textContent = `⏱️ Fetched in ${timeTaken} ms`;
  } catch (err) {
    quoteEl.textContent = "Failed to load quote.";
    console.error(err);
  }
}

document.addEventListener("DOMContentLoaded", getQuote);

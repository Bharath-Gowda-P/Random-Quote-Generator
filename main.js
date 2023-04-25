const quoteArea = document.querySelector("[quote]");
const quoteBtn = document.querySelector("[quoteBtn]");
const authorName = document.querySelector("[author]");
const url = "https://api.quotable.io/random";

async function getQuote() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  renderData(data);
}

function renderData(data) {
  quoteArea.textContent = `${data?.content}`;
  authorName.textContent = `~ ${data?.author}`;
}

quoteBtn.addEventListener("click", getQuote);

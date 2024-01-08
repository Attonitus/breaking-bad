const quoteLabel = document.createElement("blockquote"),
authorLabel = document.createElement("h3"),
nextButton = document.createElement("button");

export const createQuote = (quote = "Sin frase", author = "Sin autor", element) => {

    nextButton.innerText = "Next Quote";
    quoteLabel.innerText = quote;
    authorLabel.innerText = author;

    element.replaceChildren(quoteLabel, authorLabel, nextButton);
}

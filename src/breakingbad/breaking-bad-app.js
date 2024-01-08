import { createQuote } from "./use-cases/create-quote";
import { fetchQuote } from "./use-cases/fetch-quote";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBad = async(element) => {
    document.querySelector("#app-title").innerHTML= "Breaking bad App"
    element.innerText = 'Loading...'
    const {quote, author} = await fetchQuote();
    createQuote(quote, author, element);

    const button = document.querySelector("button");
    button.addEventListener("click", async(e) => {
        element.innerHTML = 'Loading...'
        const {quote, author} = await fetchQuote();
        createQuote(quote, author, element);
    })
}


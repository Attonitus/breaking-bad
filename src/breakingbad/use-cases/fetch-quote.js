
const url = "https://api.breakingbadquotes.xyz/v1/quotes";

export const fetchQuote = async() => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data[0]);
        return data[0];
    } catch (error) {
        console.log(`Hubo un error: ${error}`);
    }
}
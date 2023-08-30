
// Get the text field
const copyTextElement = document.querySelector("#simple-link");

function copyToClipboard(e){
    // Copy the text inside
    navigator.clipboard.writeText(e.parentElement.querySelector("a").innerText);
    e.innerText = "Copied!";
}
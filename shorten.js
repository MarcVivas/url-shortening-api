
const form = document.querySelector("form");
const results = document.querySelector(".results :first-child");
const linkCardTemplate = document.querySelector('template');




async function shorten(e) {
    const link = document.querySelector("#link");
    appendLinkCard(link.value, await getSimpleLink(link.value));
    link.value = "";
}


function appendLinkCard(originalLink, simpleLink){
    
    const elementClone = linkCardTemplate.content.cloneNode(true);   
    const parentDiv =  elementClone.querySelector(':first-child');
    const linkOriginal = parentDiv.querySelector("#original-link");
    const linkSimple = parentDiv.querySelector("#simple-link");
    linkSimple.innerText = simpleLink;
    linkOriginal.innerText = originalLink;



    results.appendChild(parentDiv);
    
}

async function getSimpleLink(originalLink){
    try {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${originalLink}`, {method:"POST", mode: 'cors'});
        const data = await response.json();
        if(data.ok){
            return data.result.short_link;
        }
        throw Error(data.error);
    }
    catch(error){
        console.log(error);
        return "Not a valid url"
    }
}


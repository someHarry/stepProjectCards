import {Requests} from "./Requests.js";
import {URL, visitCardContainer} from "./constants.js";
import {Visit} from "./Visit.js";

async function downloadCards() {
    let res = await Requests.GET(URL)
    if ( res.length > 0 ) {
        res.forEach(data => {
            visitCardContainer.innerHTML = "";
            let card = new Visit(data);
            visitCardContainer.append(card.render());
        })
    }
}

export {downloadCards}


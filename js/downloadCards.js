import {Requests} from "./Requests.js";
import {URL, visitCardContainer} from "./constants.js";
import {Visit} from "./Visit.js";
import {renderPlaceholder} from "./renderPlaceholder.js";
import {VisitDentist} from "./VisitDentist.js";
import {createCorrectDoctor} from "./Utilities.js";

async function downloadCards() {
    let res = await Requests.GET(URL)
    visitCardContainer.innerHTML = "";
    if ( res.length > 0 ) {
        res.forEach(data => {
            let card = createCorrectDoctor(data);
            visitCardContainer.append(card.render());
        })
    } else {
        renderPlaceholder();
    }
}

export {downloadCards}


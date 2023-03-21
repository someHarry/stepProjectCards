import { Requests } from "./Requests.js";
import { URL } from "./constants.js"
import {renderPlaceholder} from "./renderPlaceholder.js";

function deleteHandler(event){
    const id = event.target.closest(".visitCard__container").dataset.cardId;
    Requests.DELETE(URL + id)
        .then(response => {
            if(response){
                event.target.closest(".visitCard__container").remove();
                if(document.querySelectorAll(".visitCard__container").length === 0){
                    renderPlaceholder()
                }
            }})
}

export {deleteHandler}
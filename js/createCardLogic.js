import {Requests} from "./Requests.js";
import {URL, visitCardContainer} from "./constants.js";
import {Visit} from "./Visit.js";
import {renderPlaceholder} from "./renderPlaceholder";

function visitHandler(event) {
    if (event.target.querySelector("select").value !== "Выбор врача") {
        let newCardData = {};
        let collectedData = [...event.target].filter(elem => {
            if(elem.type !== "submit"){
                return true
            }
        });
        newCardData.purpose = collectedData.find(d=>d.id === "visit").value;
        newCardData.description = collectedData.find(d=>d.id === "description").value;
        newCardData.fio = collectedData.find(d=>d.id === "full-name").value;
        newCardData.status = "Open";
        if (collectedData[3].value === "1"){
            newCardData.priority = "High"
        } else
        if (collectedData[3].value === "2"){
            newCardData.priority = "Normal"
        } else
        if (collectedData[3].value === "3"){
            newCardData.priority = "Low"
        }

        if (collectedData[0].value === "1"){
            newCardData.doctor = "Кардиолог";
            newCardData.normPressure = collectedData.find(d=>d.id === "pressure").value;
            newCardData.bodyMass = collectedData.find(d=>d.id === "mass").value;
            newCardData.prevDiseases = collectedData.find(d=>d.id === "diseases").value;
            newCardData.age = collectedData.find(d=>d.id === "age").value;
        } else if (collectedData[0].value === "2") {
            newCardData.doctor = "Дантист";
            newCardData.lastVisit = collectedData.find(d=>d.id === "start").value;
        } else if (collectedData[0].value === "3") {
            newCardData.doctor = "Терапевт";
            newCardData.age = collectedData.find(d=>d.id === "age").value;
        }

        document.querySelector("#modal-for-create .btn-close").click()

        Requests.POST(URL, newCardData)
            .then(response => {
                let newCard = new Visit(response);
                if(document.querySelectorAll(".visitCard__container").length === 0){
                    visitCardContainer.innerHTML = "";
                }
                visitCardContainer.append(newCard.render());
            });
    }
}

export {visitHandler}
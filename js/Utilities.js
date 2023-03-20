import {VisitDentist} from "./VisitDentist.js";
import {VisitCardiolog} from "./VisitCardiologist.js";
import {VisitTherapist} from "./VisitTherapist.js";
import {Visit} from "./Visit.js";

export function hide(element){
    if(!element.classList.contains("hidden")){
        element.classList.add("hidden");
    }
}

export function show(element){
    if(element.classList.contains("hidden")){
        element.classList.remove("hidden");
    }
}

export function createCorrectDoctor(data){
    if(data.doctor === "Кардиолог"){
        return new VisitCardiolog(data);
    } else if(data.doctor === "Дантист"){
        return new VisitDentist(data);
    } else if(data.doctor === "Терапевт"){
        return new VisitTherapist(data);
    } else {
        console.log("can't understand who is your doctor: " + data.doctor)
        return new Visit(data);
    }
}

export function quickChangeCard(newCardData){
    const cardToChange = document.querySelector(`[data-card-id = "${newCardData.id}"]`);
    cardToChange.innerHTML = "";
    [...createCorrectDoctor(newCardData).render().children].forEach((elem)=>{
        cardToChange.append(elem);
    })
}
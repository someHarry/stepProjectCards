import {modalForEdit} from "./script.js"
import {Requests} from "./Requests.js";
import { URL } from "./constants.js";
import { quickChangeCard } from "./Utilities.js";



function editCardHandler(event) {
    const cardToEdit = event.target.closest(".visitCard__container");
    modalForEdit.selectedCardId = cardToEdit.dataset.cardId;

    modalForEdit.modal.style.display = "block";
    let doctor = {title: cardToEdit.querySelector(".visitCard__container--doctor").textContent};
    doctor.number = doctor.title === "Кардиолог" ? "1" : doctor.title === "Дантист" ? "2" : doctor.title === "Терапевт" ? "3" : "Выбор врача";
    modalForEdit.modal.querySelector("select").value = doctor.number;
    if(doctor.number!=="Выбор врача"){
        modalForEdit.modal.querySelector("select").dispatchEvent(new CustomEvent("change")); // don`t judge me for this )
        modalForEdit.modal.querySelector("#full-name").value = cardToEdit.querySelector(".visitCard__container--fio").textContent;
        modalForEdit.modal.querySelector("#visit").value = cardToEdit.querySelector(".visitCard__container--purpose").textContent;
        modalForEdit.modal.querySelector("#description").value = cardToEdit.querySelector(".visitCard__container--description ").textContent;
        modalForEdit.modal.querySelectorAll("select")[1].value = cardToEdit.querySelector(".visitCard__container--priority").textContent === "High" ? "1" : cardToEdit.querySelector(".visitCard__container--priority").textContent === "Normal" ? "2" : cardToEdit.querySelector(".visitCard__container--priority").textContent === "Low" ? "3" : "Срочность визита";
        if(modalForEdit.modal.querySelector("select").value === "1"){
            modalForEdit.modal.querySelector("#pressure").value = cardToEdit.querySelector(".visitCard__container--normPressure").textContent;
            modalForEdit.modal.querySelector("#mass").value = cardToEdit.querySelector(".visitCard__container--bodyMass").textContent;
            modalForEdit.modal.querySelector("#diseases").value = cardToEdit.querySelector(".visitCard__container--prevDiseases").textContent;
            modalForEdit.modal.querySelector("#age").value = cardToEdit.querySelector(".visitCard__container--age").textContent;
        } else if(modalForEdit.modal.querySelector("select").value === "2"){
            modalForEdit.modal.querySelector("#start").value = cardToEdit.querySelector(".visitCard__container--lastVisit").textContent;
        } else if(modalForEdit.modal.querySelector("select").value === "3"){
            modalForEdit.modal.querySelector("#age").value = cardToEdit.querySelector(".visitCard__container--age").textContent;
        }
    }
}

function editFormHandler(){
    let newCardData = {};
    newCardData.doctor = modalForEdit.modal.querySelector("select")[modalForEdit.modal.querySelector("select").value].textContent;
    newCardData.fio = modalForEdit.modal.querySelector("#full-name").value;
    newCardData.purpose = modalForEdit.modal.querySelector("#visit").value;
    newCardData.description = modalForEdit.modal.querySelector("#description").value;
    newCardData.priority = modalForEdit.modal.querySelectorAll("select")[1][modalForEdit.modal.querySelectorAll("select")[1].value].textContent;

    newCardData.normPressure = modalForEdit.modal.querySelector("#pressure")?.value;
    newCardData.bodyMass = modalForEdit.modal.querySelector("#mass")?.value;
    newCardData.prevDiseases = modalForEdit.modal.querySelector("#diseases")?.value;
    newCardData.age = modalForEdit.modal.querySelector("#age")?.value;
    newCardData.lastVisit = modalForEdit.modal.querySelector("#start")?.value;

    Requests.PUT(URL + modalForEdit.selectedCardId, newCardData)
        .then(response  =>{
            quickChangeCard(response);
        })
    modalForEdit.modal.querySelector(".btn-close").click();
}


export { editCardHandler, editFormHandler }
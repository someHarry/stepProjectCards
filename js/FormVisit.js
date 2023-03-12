import Form from "./Form.js";
import createFieldsCardiologist from "./createFieldsCardiologist.js";

export default class FormVisit extends Form {
    constructor(submitTitle, formHandler) {
        super(submitTitle, formHandler);
    }
    renderVisit() {
        const select = document.createElement('select');
        select.className = "form-select form-select-m";
        const optionSelected = document.createElement('option');
        optionSelected.selected;
        optionSelected.textContent = 'Выбор врача';
        const optionCardiologist = document.createElement('option');
        optionCardiologist.value = '1';
        optionCardiologist.textContent = 'Кардиолог';
        const optionDentist = document.createElement('option');
        optionDentist.value = '2';
        optionDentist.textContent = 'Дантист';
        const optionTherapist = document.createElement('option');
        optionTherapist.value = '3';
        optionTherapist.textContent = 'Терапевт';
        select.append(optionSelected, optionCardiologist, optionDentist, optionTherapist);

        const containerVisit = document.createElement('div');
containerVisit.className = "containerVisit";
        select.addEventListener('change',(event)=>{
            if (event.target.value === '1'){
                document.querySelector(".modal-content .form-select.form-select-m").after(createFieldsCardiologist(containerVisit))            }

            console.log(containerVisit)
        })
        return select;
    }
}

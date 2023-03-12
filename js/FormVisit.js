import Form from "./Form.js";

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
            console.log(event)
            containerVisit.innerHTML = '';
            const labelVisit = document.createElement('label');
            labelVisit.htmlFor = "visit";
            labelVisit.textContent = "Цель визита";
            labelVisit.className = 'mx-2';
            const inputVisit = document.createElement('input');
            inputVisit.id = "visit";
            inputVisit.type = "text";
            inputVisit.placeholder = "Цель визита";
            const labelDescription = document.createElement('label');
            labelDescription.htmlFor = "description";
            labelDescription.textContent = "Краткое описание визита";
            labelDescription.className = 'mx-2';
            const inputDescription = document.createElement('input');
            inputDescription.id = "description";
            inputDescription.type = "text";
            inputDescription.placeholder = "Описание визита";

            const selectUrgency = document.createElement('select');
            selectUrgency.className = "form-select form-select-m";
            const optionUrgency = document.createElement('option');
            optionUrgency.selected;
            optionUrgency.textContent = "Срочность визита";
            const urgencyHigh = document.createElement('option');
            urgencyHigh.value = '1';
            urgencyHigh.textContent = 'High';
            const urgencyNormal = document.createElement('option');
            urgencyNormal.value = '2';
            urgencyNormal.textContent = 'Normal';
            const urgencyLow = document.createElement('option');
            urgencyLow.value = '3';
            urgencyLow.textContent = 'Low';

            selectUrgency.append(optionUrgency, urgencyHigh, urgencyNormal, urgencyLow);
            const labelName = document.createElement('label');
            labelName.htmlFor = "full-name";
            labelName.textContent = "Фамилия Имя Отчество";
            labelName.className = 'mx-2';
            const inputName = document.createElement('input');
            inputName.id = "full-name";
            inputName.className = "mx-3";
            inputName.type = "text";
            inputName.placeholder = "ФИО";

            containerVisit.append(labelVisit, inputVisit, labelDescription, inputDescription, selectUrgency,labelName,inputName);

            document.querySelector(".modal-content .form-select.form-select-m").after(containerVisit)
        })
        return select;
    }
}

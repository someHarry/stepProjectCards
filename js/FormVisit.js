import Form from "./Form.js";

export default class FormVisit extends Form {
    constructor(submitTitle, formHandler) {
        super(submitTitle, formHandler);
    }
    render(content) {
        return super.render(content);
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
        optionTherapist.textContent = 'Дантист';
        select.append(optionSelected,optionCardiologist,optionDentist,optionTherapist);
        return select;
    }
}

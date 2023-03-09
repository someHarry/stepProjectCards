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
    renderFields(){
        // <label for="family-name-field">Фамилия</label>
        // <input id="family-name-field" type="text" name="family-name">
        // цель визита
        // краткое описание визита
        // выпадающее поле - срочность (обычная, приоритетная, неотложная)
        // ФИО
        const labelVisit = document.createElement('label');
        labelVisit.htmlFor = "label-visit";
        labelVisit.textContent = "Цель визита";
        const inputVisit = document.createElement('input');
        inputVisit.id = "label-visit";
        inputVisit.type = "text";
        inputVisit.placeholder = "Цель визита";
        const labelDescription = document.createElement('label');
        labelDescription.htmlFor = "description-visit";
        labelDescription.textContent = "Краткое описание визита";
        const inputDescription = document.createElement('input');
        inputDescription.id = "description-visit";
        inputDescription.type = "text";
        inputDescription.placeholder = "Описание визита";


        const labelName = document.createElement('label');
        labelName.htmlFor = "description-visit";
        labelName.textContent = "Краткое описание визита";
        const inputName = document.createElement('input');
        inputName.id = "description-visit";
        inputName.type = "text";
        inputName.placeholder = "Описание визита";
    }
}

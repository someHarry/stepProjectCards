import Form from "./Form.js";
import createFieldsCardiologist from "./createFieldsCardiologist.js";
import createFieldsGeneral from "./createFieldsGeneral.js";
import createFieldsDentist from "./createFieldsDentist.js";
import createFieldsTherapist from "./createFieldsTherapist.js";

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

        const doctorsFieldsWrapper = document.createElement("div");

        select.addEventListener("change", (event) => {
            doctorsFieldsWrapper.innerHTML = "";

            if (select.options[select.selectedIndex].value === "1") {
                doctorsFieldsWrapper.append(createFieldsGeneral(),createFieldsCardiologist());
            }

            if (select.options[select.selectedIndex].value === "2") {

                doctorsFieldsWrapper.append(createFieldsGeneral(), createFieldsDentist());
            }

            if (select.options[select.selectedIndex].value === "3") {
                doctorsFieldsWrapper.append(createFieldsGeneral(), createFieldsTherapist());
            }
        });
        const fragment = document.createDocumentFragment();
        fragment.append(select, doctorsFieldsWrapper);
        return fragment;
    }
}

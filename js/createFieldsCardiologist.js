
export default function createFieldsCardiologist (){

 const fragment = document.createDocumentFragment();

    const labelPressure = document.createElement('label');
    labelPressure.htmlFor = "pressure";
    labelPressure.textContent = "Обычное давление";
    labelPressure.className = 'mx-2';
    const inputPressure =document.createElement('input');
    inputPressure.id = "pressure";
    inputPressure.type = "text";
    inputPressure.placeholder = "Обычное давление";
    inputPressure.classList.add("mb-2");

    const labelBodyMass = document.createElement('label');
    labelBodyMass.htmlFor = "pressure";
    labelBodyMass.textContent = "Обычное давление";
    labelBodyMass.className = 'mx-2';
    const inputBodyMass =document.createElement('input');
    inputBodyMass.id = "mass";
   inputBodyMass.type = "text";
    inputBodyMass.placeholder = "Индекс массы тела";
    inputBodyMass.classList.add("mb-2");

    const labelDiseases = document.createElement('label');
    labelDiseases.htmlFor = "diseases";
    labelDiseases.textContent = "Перенесенные заболевания сердечно-сосудистой системы";
    labelDiseases.className = 'mx-2';
    const inputDiseases = document.createElement('input');
    inputDiseases.id = "diseases";
    inputDiseases.type = "text";
    inputDiseases.placeholder = "Заболевания";
    inputDiseases.classList.add("mb-2");

    const labelAge = document.createElement('label');
    labelAge.htmlFor = "age";
    labelAge.textContent = "Возраст";
    labelAge.className = 'mx-2';
    const inputAge = document.createElement('input');
    inputAge.id = "age";
    inputAge.type = "text";
    inputAge.placeholder = "Возраст";
    inputAge.classList.add("mb-2");

    fragment.append(labelPressure, inputPressure, labelBodyMass, inputBodyMass, labelDiseases, inputDiseases, labelAge,inputAge);
    return fragment;
}

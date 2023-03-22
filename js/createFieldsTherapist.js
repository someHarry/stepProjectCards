export default function createFieldsTherapist (){
    const fragment = document.createDocumentFragment();

    const labelAgeTherapist = document.createElement('label');
    labelAgeTherapist.htmlFor = "age";
    labelAgeTherapist.textContent = "Возраст";
    labelAgeTherapist.className = 'mx-2';
    const inputAge = document.createElement('input');
    inputAge.id = "age";
    inputAge.type = "text";
    inputAge.placeholder = "Возраст";
    inputAge.classList.add("mb-2");

    fragment.append(labelAgeTherapist, inputAge);
    return fragment;
}
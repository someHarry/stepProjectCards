export default function createFieldsDentist (){
    const fragment = document.createDocumentFragment();

    const labelData = document.createElement('label');
    labelData.htmlFor = 'start';
    labelData.textContent = 'Дата последнего посещения';
    labelData.className = 'mx-2';
    const inputData = document.createElement('input');
    inputData.type = 'data';
    inputData.id = 'start';

    fragment.append(labelData, inputData);
    return fragment;
}
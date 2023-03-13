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
    // <label htmlFor="start">Start date:</label>
    //
    // <input type="date" id="start" name="trip-start"
    //        value="2018-07-22"
    //        min="2018-01-01" max="2018-12-31">
}
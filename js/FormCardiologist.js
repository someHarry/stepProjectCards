
import FormVisit from "./FormVisit.js";


export default class FormCardiologist extends FormVisit{
    constructor(submitTitle, formHandler) {
        super(submitTitle, formHandler);
    }
render(content) {
    return super.render(content);
}
renderVisit() {
    return super.renderVisit();
}
    renderFields(){
        return super.renderFields();
    }


}
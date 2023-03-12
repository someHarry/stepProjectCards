import Form from "./Form.js";

export default class FormLogin extends Form {
    constructor(submitTitle, formHandler) {
        super(submitTitle, formHandler);
    }

    renderInput() {
        const fragment = document.createDocumentFragment();
        const inputLogin = document.createElement('input');
        inputLogin.type = 'text';
        inputLogin.id = 'inputLogin';
        inputLogin.className = "form-select form-select-m";

        const inputPassword = document.createElement('input');
        inputPassword.type = 'password';
        inputPassword.id = 'inputPassword';
        inputPassword.className = "form-select form-select-m mt-2";
        fragment.append(inputLogin, inputPassword);
        return fragment;
    }
}

import Form from "./Form.js";

export default class FormLogin extends Form {
    constructor(submitTitle, formHandler) {
        super(submitTitle, formHandler);
    }

    renderInput() {
        const fragment = document.createDocumentFragment();
        const labelLogin = document.createElement('label');
        labelLogin.htmlFor = 'inputLogin';
        labelLogin.textContent = 'Логин';
        labelLogin.className = "text-info";
        const inputLogin = document.createElement('input');
        inputLogin.type = 'text';
        inputLogin.id = 'inputLogin';
        inputLogin.className = "form-control form-select-m mb-2 mt-1";
        const labelPassword = document.createElement('label');
        labelPassword.htmlFor = 'inputPassword';
        labelPassword.textContent = 'Пароль';
        labelPassword.className = "text-info";
        const inputPassword = document.createElement('input');
        inputPassword.type = 'password';
        inputPassword.id = 'inputPassword';
        inputPassword.className = "form-control form-select-m mt-2";
        fragment.append(labelLogin,inputLogin,labelPassword,inputPassword);
        return fragment;
    }
}

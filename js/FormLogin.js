import Form from "./Form.js";
export default class FormLogin extends Form{
    constructor(submitTitle , formHandler) {
        super(submitTitle , formHandler);
    }
    renderInput(){
        const fragment = document.createDocumentFragment();
const inputLogin = document.createElement('input');
inputLogin.type = 'text';
inputLogin.id = 'inputLogin';

const inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.id = 'inputPassword';
fragment.append(inputLogin, inputPassword);
return fragment;
    }
}

// <label htmlFor="inputLogin2" className="visually-hidden">Login</label>-- >
// < !--<input type="text" class="form-control" id="inputLogin2" placeholder="Login">-->
//
// <!--    <label for="inputPassword2" class="visually-hidden">Password</label>-->
// <!--    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">-->
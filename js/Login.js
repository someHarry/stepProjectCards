import { buttonCreateCard, buttonLogin, loginUrl } from "./constants.js";
import { hide, show } from "./Utilities.js";

let token = localStorage.getItem("token"); // Получаем token из local storage

function isToken() {
    if (!!token) {       // Проверяем, получили ли мы токен, если токен не null, прячем форму авторизации и показываем кнопку "Создать карточку"
        hide(buttonLogin);      // Надо будет создать функцию, которая навешивает класс hidden
        show(buttonCreateCard); // ...и убирает его
    }
}

// Якобы у нас есть форма, юзер ввёл туда логин-пароль, нажал "отправить" и у нас есть эти данные. Пока что просто переменная:

function loginHandler(event) {
    let credentials = {
        email: event.target.querySelector("#inputLogin").value,
        password: event.target.querySelector("#inputPassword").value
    }
    Requests.LOGIN_REQUEST(loginUrl, credentials)
        .then(tk => {
        token = tk;
        localStorage.setItem('token', token);
        })
        .then((token)=>{
            document.querySelector(".modal .btn-close").click();
            isToken(token)
        })
}


export {token, isToken, loginHandler}
import {Requests} from "./Requests.js";

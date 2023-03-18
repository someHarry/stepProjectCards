import {buttonCreateCard, buttonLogin, buttonLogout, loginUrl, visitCardContainer} from "./constants.js";
import {hide, show} from "./Utilities.js";
import {downloadCards} from "./downloadCards.js"
import {Requests} from "./Requests.js";
import {renderPlaceholder} from "./renderPlaceholder";


let token = localStorage.getItem("token"); // Получаем token из local storage

function isToken() {
    if (token === "Incorrect username or password") {
        deleteToken();
    }
    if (!!token) {
        downloadCards() // подгружает карточки
        hide(buttonLogin);      // навешивает класс hidden
        show(buttonCreateCard); // и убирает его
        show(buttonLogout);
    } else {
        show(buttonLogin);
        hide(buttonCreateCard);
        hide(buttonLogout);
        renderPlaceholder()
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
        .then((token) => {
            document.querySelector(".modal .btn-close").click();
            isToken(token)
        })
}

function deleteToken() {
    localStorage.removeItem("token");
    token = false;
}


export {token, isToken, deleteToken, loginHandler}

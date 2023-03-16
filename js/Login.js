import {buttonCreateCard, buttonLogin, buttonLogout, loginUrl, visitCardContainer} from "./constants.js";
import {hide, show} from "./Utilities.js";
import {downloadCards} from "./downloadCards.js"
import {Requests} from "./Requests.js";


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
        visitCardContainer.innerHTML = `<section class="images pt-3" id="placeholder">
                                            <div class="images-container mx-auto" style="width: 25rem;">
                                                <img src="https://www.englishdom.com/dynamicus/blog-post/000/002/383/1637751298_content_700x455.jpg" class="card-img-top mb-4" alt="">
                                                <p class="images-text text-center fs-3 text-light"> No items have been added</p>
                                            </div>
                                        </section>`;
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

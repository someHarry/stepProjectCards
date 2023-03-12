import {
  buttonLogin,
  buttonCreateCard,
  loginUrl,
  visitCardContainer,
} from "./constants.js";
import { token, isToken, loginHandler } from "./Login.js";
import { Requests } from "./Requests.js";

import Modal from "./Modal.js";
import Form from "./Form.js";
import FormLogin from "./FormLogin.js";
import FormVisit from "./FormVisit.js";

import { visitCard, Visit } from "./Visit.js";
import { VisitCardiolog } from "./VisitCardiologist.js";
import { VisitDentist } from "./VisitDentist.js";
import { VisitTherapist } from "./VisitTherapist.js";

isToken(); // Проверяем наличие токена в LocalStorae, если токен есть, прячем кнопку "Вход", открываем кнопку "Создать карточку"

const modalTemplate = document.querySelector("#modal").content;

const formLogin = new FormLogin("Войти", loginHandler);
const formVisit = new FormVisit("Создать", function () {
  console.log(this);
});

let modalForLogin = new Modal(modalTemplate, "Login", formLogin.render(formLogin.renderInput()), "modal-for-login");
let modalForCreate = new Modal(modalTemplate, "Create card", formVisit.render(formVisit.renderVisit()), "modal-for-create");

document.querySelector("body").append(modalForLogin.render());
document.querySelector("body").append(modalForCreate.render());

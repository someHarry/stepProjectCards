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

isToken();  // Проверяем наличие токена в LocalStorae, если токен есть, прячем кнопку "Вход", открываем кнопку "Создать карточку"

const modalTemplate = document.querySelector("#modal").content;

const formLogin = new FormLogin("Let me in", loginHandler);
const formVisit = new FormVisit('hi',function (){});
let mymodal = new Modal(modalTemplate, 'Login', formLogin.render(formLogin.renderInput()), 'modal-window');

const formVisit = new FormVisit("hello", function () {
  console.log(this);
});

let mymodal = new Modal(
  modalTemplate,
  "ewgrg",
  formLogin.render(formLogin.renderInput()),
  "modal-window"
);

const formVisit = new FormVisit('hi',function (){});

let mymodal = new Modal(modalTemplate, 'Login', formLogin.render(formLogin.renderInput()), 'modal-window');

document.querySelector("body").append(mymodal.render());

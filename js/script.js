import {
  buttonLogin,
  buttonCreateCard,
  loginUrl,
  visitCardContainer,
  buttonLogout,
} from "./constants.js";
import { token, isToken, loginHandler } from "./Login.js";
import { Requests } from "./Requests.js";
import { visitHandler } from "./createCardLogic.js";

import { logout } from "./Logout.js";

import Modal from "./Modal.js";
import Form from "./Form.js";
import FormLogin from "./FormLogin.js";
import FormVisit from "./FormVisit.js";

import { Visit } from "./Visit.js";
import { VisitCardiolog } from "./VisitCardiologist.js";
import { VisitDentist } from "./VisitDentist.js";
import { VisitTherapist } from "./VisitTherapist.js";
import createFieldsCardiologist from "./createFieldsCardiologist.js";

import {
  input,
  statusFilter,
  priorityFilter,
  searchBtn,
  handler,
} from "./Filter.js";

import ModalConfirmDelete from "./ModalConfirmDelete.js";

isToken(); // Проверяем наличие токена в LocalStorae, если токен есть, прячем кнопку "Вход", открываем кнопку "Создать карточку"
buttonLogout.addEventListener("click", logout); // Вешаем хендлер на кнопку "Выход"

const modalTemplate = document.querySelector("#modal").content;

const formLogin = new FormLogin("Войти", loginHandler);

const formVisit = new FormVisit("Создать", visitHandler);

//Это модалка для подтверждения
// const modalConfirmDelete = document.querySelector('#modalConfirmDelete').content;
// let modalConfirmDelete1 = new ModalConfirmDelete(modalConfirmDelete, 'karina');
// modalConfirmDelete1.render()
// document.querySelector("body").append(modalConfirmDelete1.render());
//

let modalForLogin = new Modal(
  modalTemplate,
  "Login",
  formLogin.render(formLogin.renderInput()),
  "modal-for-login"
);
let modalForCreate = new Modal(
  modalTemplate,
  "Create card",
  formVisit.render(formVisit.renderVisit()),
  "modal-for-create"
);

document.querySelector("body").append(modalForLogin.render());
document.querySelector("body").append(modalForCreate.render());

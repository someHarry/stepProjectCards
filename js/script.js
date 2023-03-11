
import {
  buttonLogin,
  buttonCreateCard,
  loginUrl,
  visitCardContainer,
} from "./constants.js";
import {token, isToken, loginHandler} from "./Login.js";
import {Requests} from "./Requests.js";

import Modal  from "./Modal.js";
import Form from "./Form.js";
import FormLogin from "./FormLogin.js";
import FormVisit from "./FormVisit.js";

import { visitCard, Visit } from "./Visit.js";
import { VisitCardiolog } from "./VisitCardiologist";
import { VisitDentist } from "./VisitDentist";
import { VisitTherapist } from "./VisitTherapist";

const modalTemplate = document.querySelector("#modal").content;

const form = new Form("knopka", function () {
  // console.log(this)
});

const formLogin = new FormLogin("knopka", function (event) {
    loginHandler(event);
});

const formVisit = new FormVisit("hello", function () {
  console.log(this);
});

let mymodal = new Modal(
  modalTemplate,
  "ewgrg",
  formLogin.render(formLogin.renderInput()),
  "modal-window"
);

document.querySelector("body").append(mymodal.render());

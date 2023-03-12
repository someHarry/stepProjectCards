<<<<<<< HEAD
import {
  buttonLogin,
  buttonCreateCard,
  loginUrl,
  visitCardContainer,
} from "./constants.js";
import { token, isToken, loginHandler } from "./Login.js";
import { Requests } from "./Requests.js";
=======
import {buttonLogin, buttonCreateCard, loginUrl} from "./constants.js";
import {token, isToken, loginHandler, TEMPORARYcredentials} from "./Login.js";
import {Requests} from "./Requests.js";
>>>>>>> c948960320cde5ffeb9498a7677940ad530657d6

import Modal from "./Modal.js";
import Form from "./Form.js";
import FormLogin from "./FormLogin.js";
import FormVisit from "./FormVisit.js";

<<<<<<< HEAD
import { visitCard, Visit } from "./Visit.js";
import { VisitCardiolog } from "./VisitCardiologist.js";
import { VisitDentist } from "./VisitDentist.js";
import { VisitTherapist } from "./VisitTherapist.js";

=======
>>>>>>> c948960320cde5ffeb9498a7677940ad530657d6
const modalTemplate = document.querySelector("#modal").content;

const formLogin = new FormLogin("knopka", function () {
  // console.log(this)
});
<<<<<<< HEAD

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
=======
const formVisit = new FormVisit('hi',function (){});
let mymodal = new Modal(modalTemplate, 'Login', formVisit.render(formLogin.renderInput()), 'modal-window');
>>>>>>> c948960320cde5ffeb9498a7677940ad530657d6

document.querySelector("body").append(mymodal.render());

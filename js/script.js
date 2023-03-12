import {buttonLogin, buttonCreateCard, loginUrl} from "./constants.js";
import {token, isToken, loginHandler, TEMPORARYcredentials} from "./Login.js";
import {Requests} from "./Requests.js";

import Modal  from "./Modal.js";
import Form from "./Form.js";
import FormLogin from "./FormLogin.js";
import FormVisit from "./FormVisit.js";

const modalTemplate = document.querySelector("#modal").content;

const formLogin = new FormLogin("knopka", function () {
  // console.log(this)
});
const formVisit = new FormVisit('hi',function (){});
let mymodal = new Modal(modalTemplate, 'Login', formVisit.render(formLogin.renderInput()), 'modal-window');

// let mymodal = new Modal(modalTemplate, 'ewgrg', formLogin.render(formLogin.renderInput()), 'modal-window');

document.querySelector("body").append(mymodal.render());
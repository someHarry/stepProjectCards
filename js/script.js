import {buttonLogin, buttonCreateCard} from "./constants.js";

import  Modal  from "./Modal.js";
import Form from "./Form.js";
import FormLogin from "./FormLogin.js";

const modalTemplate = document.querySelector('#modal').content;

const form = new Form('knopka', function (){
    console.log(this)
})

const formLogin = new FormLogin('knopka', function (){
    console.log(this)
})


let mymodal = new Modal(modalTemplate, 'ewgrg', formLogin.renderInput(), 'modal-window');

document.querySelector("body").append(mymodal.render());
console.log(mymodal.render());






import {buttonLogin, buttonCreateCard} from "./constants.js";

import  Modal  from "./Modal.js";
import Form from "./Form.js";

const modalTemplate = document.querySelector('#modal').content;

const form = new Form('knopka', 'con', function (){
    console.log(this)
})

let mymodal = new Modal(modalTemplate, 'ewgrg',form.render(), 'modal-window');

document.querySelector("body").append(mymodal.render());
console.log(mymodal.render());






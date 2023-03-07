import  Modal  from "./Modal.js";

const modalTemplate = document.querySelector('#modal').content;
let mymodal = new Modal(modalTemplate);
document.querySelector("body").append(mymodal.render())
console.log(mymodal.render())
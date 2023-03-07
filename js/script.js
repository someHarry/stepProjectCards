import  Modal  from "./Modal.js";

const modalTemplate = document.querySelector('#modal').content;

let mymodal = new Modal(modalTemplate, 'ewgrg','eg3rgrg');

document.querySelector("body").append(mymodal.render());
console.log(mymodal.render());
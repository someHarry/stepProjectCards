import { hide, show } from "./Utilities.js";

const input = document.querySelector("#inputText2");
const statusFilter = document.querySelector("#status__filter");
const priorityFilter = document.querySelector("#priority__filter");
const searchBtn = document.querySelector("#search__btn");

const cardsForFilter = [...document.querySelectorAll(".cards__status")];

function handler() {
  if (statusFilter.value === "0") {
    console.log("all");
    cardsForFilter.forEach((item) => {
      show(item);
    });
  }
  if (statusFilter.value === "1") {
    console.log("all2");
    cardsForFilter.forEach((item) => {
      if (item.dataset.done === "true") {
        show(item);

        console.log("all3");
      } else {
        hide(item);
        console.log("none");
      }
    });
  }
  if (statusFilter.value === "2") {
    console.log("all4");

    cardsForFilter.forEach((item) => {
      console.log("all5");

      if (item.dataset.done === "false") {
        console.log("all");

        console.log("none");

        show(item);
      } else {
        hide(item);
      }
    });
  }
}

searchBtn.addEventListener("click", (el) => {
  el.preventDefault();
  handler();
});

console.log(input);
console.log(statusFilter);
console.log(priorityFilter);
console.log(searchBtn);

class Filter {
  constructor() {}
  static input() {
    return console.log(input.value);
  }
  static status() {
    const getStatusValue =
      statusFilter.options[statusFilter.selectedIndex].value;
    if (getStatusValue === "1") {
      return console.log(getStatusValue);
    } else if (getStatusValue === "2") {
      return console.log(getStatusValue);
    } else {
      return console.log(getStatusValue);
    }
  }
  static priority() {
    const getPriorityValue =
      priorityFilter.options[priorityFilter.selectedIndex].value;
    if (getPriorityValue === "1") {
      return console.log(getPriorityValue);
    } else if (getPriorityValue === "2") {
      return console.log(getPriorityValue);
    } else if (getPriorityValue === "3") {
      return console.log(getPriorityValue);
    } else {
      return console.log(getPriorityValue);
    }
  }
}

export {
  input,
  statusFilter,
  priorityFilter,
  searchBtn,
  cardsForFilter,
  handler,
};

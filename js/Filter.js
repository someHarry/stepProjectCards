import { hide, show } from "./Utilities.js";

const input = document.querySelector("#inputText2");
const statusFilter = document.querySelector("#status__filter");
const priorityFilter = document.querySelector("#priority__filter");
const searchBtn = document.querySelector("#search__btn");

function handler() {
  const cardsForFilter = [
    ...document.querySelectorAll(".visitCard__container"),
  ];
  if (statusFilter.value === "0") {
    cardsForFilter.forEach((item) => {
      show(item);
    });
  }
  if (statusFilter.value === "1") {
    cardsForFilter.forEach((item) => {
      if (item.dataset.done === "false") {
        show(item);
      } else {
        hide(item);
      }
    });
  }
  if (statusFilter.value === "2") {
    cardsForFilter.forEach((item) => {
      if (item.dataset.done === "true") {
        show(item);
      } else {
        hide(item);
      }
    });
  }
}

function Priority() {
  const cardsForFilter = [
    ...document.querySelectorAll(".visitCard__container"),
  ];
  const getPriorityValue =
    priorityFilter.options[priorityFilter.selectedIndex].value;

  if (getPriorityValue === "0") {
    cardsForFilter.forEach((item) => {
      show(item);
    });
  }
  if (priorityFilter === "1") {
    cardsForFilter.forEach((item) => {
      if (item.priority === "High") {
        console.log(item);
        show(item);
      } else {
        hide(item);
      }
    });
  }
  if (getPriorityValue === "2") {
    cardsForFilter.forEach((item) => {
      if (item.priority === "Normal") {
        show(item);
      } else {
        hide(item);
      }
    });
  }
  if (getPriorityValue === "3") {
    cardsForFilter.forEach((item) => {
      if (item.priority === "Low") {
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
  Priority();
});

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

export { input, statusFilter, priorityFilter, searchBtn, handler };

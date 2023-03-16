const input = document.querySelector("#inputText2");
const statusFilter = document.querySelector("#status__filter");
const priorityFilter = document.querySelector("#priority__filter");
const searchBtn = document.querySelector("#search__btn");

const cardsForFilter = [...document.querySelectorAll(".cards__status")];

function handler() {
  if (statusFilter.value === "0") {
    console.log("all");

    return (cardsForFilter.style.display = "block");
  } else if (statusFilter.value === "1") {
    return cardsForFilter.forEach((item) => {
      if (item.dataset.done === "true") {
        item.style.display = "block";
        console.log("block");
      } else {
        item.style.display = "none";
        console.log("none");
      }
    });
  } else {
    return cardsForFilter.forEach((item) => {
      if (item.dataset.done === "false") {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
}

searchBtn.addEventListener("change", (el) => {
  el.preventDefault();
  handler();
});

console.log(input);
console.log(statusFilter);
console.log(priorityFilter);
console.log(searchBtn);

function Status() {
  const getStatusValue = statusFilter.options[statusFilter.selectedIndex].value;
  searchBtn.addEventListener("click", () => {
    if (getStatusValue === "1") {
      return console.log(getStatusValue);
    } else if (getStatusValue === "2") {
      return console.log(getStatusValue);
    } else {
      return console.log(getStatusValue);
    }
  });
}

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

export { input, statusFilter, priorityFilter };

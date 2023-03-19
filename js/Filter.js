import { hide, show } from "./Utilities.js";

const inputFilter = document.querySelector("#inputText2");
const statusFilter = document.querySelector("#status__filter");
const priorityFilter = document.querySelector("#priority__filter");
const searchForm = document.querySelector("#searchForm");

searchForm.addEventListener("submit", (el) => {
  el.preventDefault();
  const cardsForFilter = [
    ...document.querySelectorAll(".visitCard__container"),
  ];

  let resultFilter = Priority(status(input(cardsForFilter)));
  cardsForFilter.forEach((element) => {
    console.log(resultFilter);
    if (resultFilter.includes(element)) {
      show(element);
    } else {
      hide(element);
    }
  });
});

function input(cardsForFilter) {
  let inputValue = inputFilter.value.toUpperCase();
  console.log(inputValue);
  return cardsForFilter.filter((item) => {
    let descriptionSearch = item.querySelector(
      ".visitCard__container--description"
    );
    let descriptionSearchContent = descriptionSearch.textContent.toUpperCase();
    if (descriptionSearchContent.includes(inputValue)) {
      return true;
    } else {
      return false;
    }
  });
}

function status(cardsForFilter) {
  if (statusFilter.value === "0") {
    return cardsForFilter;
  }
  if (statusFilter.value === "1") {
    return cardsForFilter.filter((item) => {
      if (item.dataset.done === "false") {
        return true;
      } else {
        return false;
      }
    });
  }
  if (statusFilter.value === "2") {
    return cardsForFilter.filter((item) => {
      if (item.dataset.done === "true") {
        return true;
      } else {
        return false;
      }
    });
  }
}

function Priority(cardsForFilter) {
  const getPriorityValue =
    priorityFilter.options[priorityFilter.selectedIndex].value;

  if (getPriorityValue === "0") {
    return cardsForFilter;
  }
  if (getPriorityValue === "1") {
    cardsForFilter.filter((item) => {
      if (item.dataset.priority === "High") {
        return true;
      } else {
        return false;
      }
    });
  }
  if (getPriorityValue === "2") {
    cardsForFilter.filter((item) => {
      if (item.dataset.priority === "Normal") {
        return true;
      } else {
        return false;
      }
    });
  }
  if (getPriorityValue === "3") {
    cardsForFilter.filter((item) => {
      if (item.dataset.priority === "Low") {
        return true;
      } else {
        return false;
      }
    });
  }
}

// class Filter {
//   constructor() {}
//   static input() {
//     return console.log(input.value);
//   }
//   static status() {
//     const getStatusValue =
//       statusFilter.options[statusFilter.selectedIndex].value;
//     if (getStatusValue === "1") {
//       return console.log(getStatusValue);
//     } else if (getStatusValue === "2") {
//       return console.log(getStatusValue);
//     } else {
//       return console.log(getStatusValue);
//     }
//   }
//   static priority() {
//     const getPriorityValue =
//       priorityFilter.options[priorityFilter.selectedIndex].value;
//     if (getPriorityValue === "1") {
//       return console.log(getPriorityValue);
//     } else if (getPriorityValue === "2") {
//       return console.log(getPriorityValue);
//     } else if (getPriorityValue === "3") {
//       return console.log(getPriorityValue);
//     } else {
//       return console.log(getPriorityValue);
//     }
//   }
// }

export {
  inputFilter,
  statusFilter,
  priorityFilter,
  searchForm,
  input,
  status,
  Priority,
};

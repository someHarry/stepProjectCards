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
  cardsForFilter.forEach((item) => {
    console.log(Priority());
    console.log(resultFilter);
    console.log(typeof resultFilter);

    if (resultFilter.includes(item)) {
      return show(item);
    } else {
      return hide(item);
    }
  });
});

function input(cardsForFilter) {
  let inputValue = inputFilter.value.toUpperCase();
  return cardsForFilter.filter((item) => {
    let descriptionSearch = item.querySelectorAll(".visitCard__container--fio");
    console.log(descriptionSearch);
    let descriptionSearchContent = descriptionSearch.textContent.toUpperCase();
    console.log(descriptionSearchContent);

    if (descriptionSearchContent.includes(inputValue)) {
      console.log(cardsForFilter);

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
        console.log(cardsForFilter);
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
  console.log(cardsForFilter);
  const getPriorityValue =
    priorityFilter.options[priorityFilter.selectedIndex].value;
  if (getPriorityValue === "0") {
    console.log(cardsForFilter);
    return cardsForFilter;
  }
  if (getPriorityValue === "1") {
    return cardsForFilter.filter((item) => {
      if (item.dataset.priority === "High") {
        return true;
      } else {
        return false;
      }
    });
  }
  if (getPriorityValue === "2") {
    return cardsForFilter.filter((item) => {
      if (item.dataset.priority === "Normal") {
        return true;
      } else {
        return false;
      }
    });
  }
  if (getPriorityValue === "3") {
    return cardsForFilter.filter((item) => {
      if (item.dataset.priority === "Low") {
        return true;
      } else {
        return false;
      }
    });
  }
}

export {
  inputFilter,
  statusFilter,
  priorityFilter,
  searchForm,
  input,
  status,
  Priority,
};

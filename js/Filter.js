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
    let titleSearch = item.querySelector(".visitCard__container--fio");
    let titleSearchContent = titleSearch.innerText.toUpperCase();
    if (titleSearchContent.includes(inputValue)) {
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
        console.log(cardsForFilter);
        return true;
      } else {
        return false;
      }
    });
  }
  console.log(cardsForFilter);
}

function Priority(cardsForFilter) {
  if (priorityFilter.value === "0") {
    return cardsForFilter;
  }
  if (priorityFilter.value === "1") {
    return cardsForFilter.filter((item) => {
      if (item.dataset.priority === "High") {
        return true;
      } else {
        return false;
      }
    });
  }
  if (priorityFilter.value === "2") {
    return cardsForFilter.filter((item) => {
      if (item.dataset.priority === "Normal") {
        return true;
      } else {
        return false;
      }
    });
  }
  if (priorityFilter.value === "3") {
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

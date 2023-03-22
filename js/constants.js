// DOM constants

const buttonLogin = document.querySelector("#buttonLogin");
const buttonCreateCard = document.querySelector("#buttonCreateCard");
const buttonLogout = document.querySelector("#buttonLogout");
const visitCardContainer = document.querySelector("#cards-container");

// Another constants

const URL = "https://ajax.test-danit.com/api/v2/cards/"; // url for Requests to cards
const loginUrl = "https://ajax.test-danit.com/api/v2/cards/login"; // url for Requests to login

// export

export { buttonLogin, buttonCreateCard, buttonLogout, visitCardContainer, URL, loginUrl };

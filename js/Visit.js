//  это класс для Карточки, которая создается по клику, появляется на доске задач.

//  контейнер для карточки
import { visitCard } from "./constants.js";
console.log(visitCard);
// import {hide, show} from "./Utilities.js"

const root = document.querySelector("#root");
const visitCard = document.createElement("div");
visitCard.className = "visitCard__container";
root.append(visitCard);

class Visit {
  constructor(fio, doctor, purpose, description, priority) {
    this.fio = fio;
    this.doctor = doctor;
    this.purpose = purpose;
    this.description = description;
    this.priority = priority;
  }
  render() {
    // создание полей

    const fio = document.createElement("p");
    fio.className = "visitCard__container--fio";
    fio.textContent = this.fio;

    const doctor = document.createElement("p");
    doctor.className = "visitCard__container--doctor";
    doctor.textContent = this.doctor;

    const purpose = document.createElement("p");
    purpose.className = "visitCard__container--purpose";
    purpose.textContent = this.purpose;

    const description = document.createElement("p");
    description.className = "visitCard__container--description";
    description.textContent = this.description;

    const priority = document.createElement("p");
    priority.className = "visitCard__container--priority";
    priority.textContent = this.priority;

    // создание кнопок
    const showMoreBtn = document.createElement("button");
    showMoreBtn.className = "visitCard__container--showMoreBtn";
    showMoreBtn.textContent = "Show More";
    const editBtn = document.createElement("button");
    editBtn.className = "visitCard__container--editBtn";
    editBtn.textContent = "Edit";

    const deleteIcon = document.createElement("button");
    deleteIcon.className = "visitCard__container--deleteIcon";
    deleteIcon.textContent = "❌";

    //  вывод информации которая должна показываться сразу
    visitCard.append(fio);
    visitCard.append(doctor);
    visitCard.append(showMoreBtn);
    visitCard.append(editBtn);
    visitCard.append(deleteIcon);

    // клик по кнопке showMoreBtn
    showMoreBtn.addEventListener("click", () => {
      visitCard.append(purpose);
      visitCard.append(description);
      visitCard.append(priority);
    });

    // клик по кнопке showMoreBtn

    editBtn.addEventListener("click", () => {
      // вызов формы для редактирования
    });

    deleteIcon.addEventListener("click", () => {});

    return visitCard;
  }
}

// const test = new Visit(
//   "Anastasiia M.",
//   "Doctor Doc.",
//   "i'm sick",
//   "slept bad.",
//   "high"
// );
// test.render();
// // export { test };

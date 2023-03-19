//  это класс для Карточки, которая создается по клику, появляется на доске задач.

//  контейнер для карточки
import { visitCardContainer } from "./constants.js";
import { deleteHandler } from "./deleteCardLogic.js";

class Visit {
  constructor({ id, fio, doctor, purpose, description, priority, status }) {
    this.fio = fio;
    this.doctor = doctor;
    this.purpose = purpose;
    this.description = description;
    this.priority = priority;
    this.status = status;
    this.cardId = id;
  }
  render() {
    const visitCard = document.createElement("div");
    visitCard.className = "visitCard__container";
    visitCard.dataset.cardId = this.cardId;
    visitCard.dataset.done = false;
    visitCard.dataset.priority = this.priority;

    // создание полей

    const fio = document.createElement("p");
    fio.className = "visitCard__container--fio";
    fio.textContent = this.fio;

    const doctor = document.createElement("p");
    doctor.className = "visitCard__container--doctor";
    doctor.textContent = this.doctor;

    const purpose = document.createElement("p");
    purpose.className = "visitCard__container--purpose hidden";
    purpose.textContent = this.purpose;

    const description = document.createElement("p");
    description.className = "visitCard__container--description hidden";
    description.textContent = this.description;

    const priority = document.createElement("p");
    priority.className = "visitCard__container--priority hidden";
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

    // status is made for Filter.js
    const status = document.createElement("p");
    status.className = "cards__status";
    status.textContent = this.status;

    //  вывод информации которая должна показываться сразу
    visitCard.append(fio);
    visitCard.append(doctor);
    visitCard.append(showMoreBtn);
    visitCard.append(editBtn);
    visitCard.append(deleteIcon);
    visitCard.append(status);

    // создаю с классом hidden
    visitCard.append(purpose);
    visitCard.append(description);
    visitCard.append(priority);
    // клик по кнопке showMoreBtn
    showMoreBtn.addEventListener("click", () => {
      purpose.classList.toggle("hidden");
      description.classList.toggle("hidden");
      priority.classList.toggle("hidden");
    });

    // клик по кнопке showMoreBtn

    editBtn.addEventListener("click", () => {
      // вызов формы для редактирования
    });

    deleteIcon.addEventListener("click", (event) => {
      if (event.target.closest(".visitCard__container--deleteIcon")) {
        // будет вызываться отдельная модалка для подтверждения удаления карточки
        deleteHandler(event); // функция-обработчик кнопки удаления
        // event.target.closest(".visitCard__container").style.display = "none";
      }
    });

    return visitCard;
  }
}

export { Visit };

// const test = new Visit(           was crated for tests, might still need it
//   "Anastasiia M.",
//   "Doctor Doc.",
//   "i'm sick",
//   "slept bad.",
//   "high"
// );
// test.render();
// // // export { test };

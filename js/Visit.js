//  это класс для Карточки, которая создается по клику, появляется на доске задач.

//  контейнер для карточки
import { visitCardContainer } from "./constants.js";
import { deleteHandler } from "./deleteCardLogic.js";
import { editCardHandler } from "./editCradLogic.js";

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
    visitCard.className =
      "visitCard__container card card-body w-25 p-3 mw-30 text-dark bg-light mb-3 d-grid gap-3 m-3"; // временные классы, чтобы легче различать карточки при тестах
    visitCard.dataset.cardId = this.cardId;
    visitCard.dataset.done = false;
    visitCard.dataset.priority = this.priority;

    // создание полей

    const fio = document.createElement("h5");
    fio.className = "visitCard__container--fio card-header border";
    fio.textContent = this.fio;

    const doctor = document.createElement("h6");
    doctor.className =
      "visitCard__container--doctor card-subtitle mb-2 text-muted ";
    doctor.textContent = this.doctor;

    const purpose = document.createElement("p");
    purpose.className =
      "visitCard__container--purpose hidden latent fw-normal fs-6 border-bottom";
    purpose.textContent = this.purpose;

    const description = document.createElement("p");
    description.className =
      "visitCard__container--description hidden latent fw-normal fs-6 border-bottom";
    description.textContent = this.description;

    const priority = document.createElement("p");
    priority.className =
      "visitCard__container--priority hidden latent fw-normal fs-6 border-bottom";
    priority.textContent = this.priority;

    // status is made for Filter.js
    const status = document.createElement("p");
    status.className =
      "cards__status hidden latent fw-normal fs-6 border-bottom";
    status.textContent = this.status;

    //  вывод информации которая должна показываться сразу
    visitCard.append(fio);
    visitCard.append(doctor);

    // создаю с классом hidden
    visitCard.append(purpose);
    visitCard.append(description);
    visitCard.append(priority);
    visitCard.append(status);

    return visitCard;
  }
  Btns() {
    // создание кнопок
    const showMoreBtn = document.createElement("button");
    showMoreBtn.className = "visitCard__container--showMoreBtn btn btn-primary";
    showMoreBtn.textContent = "Show More";
    const editBtn = document.createElement("button");
    editBtn.className = "visitCard__container--editBtn btn btn-info";
    editBtn.textContent = "Edit ✏";

    const deleteIcon = document.createElement("button");
    deleteIcon.className = "visitCard__container--deleteIcon btn btn-danger";
    deleteIcon.textContent = "❌";

    showMoreBtn.addEventListener("click", (event) => {
      [
        ...event.target
          .closest(".visitCard__container")
          .querySelectorAll(".latent"),
      ].forEach((e) => e.classList.toggle("hidden"));
      showMoreBtn.textContent =
        showMoreBtn.textContent === "Show More" ? "Show Less" : "Show More";
    });

    // клик по кнопке editBtn

    editBtn.addEventListener("click", (event) => {
      // вызов формы для редактирования
      editCardHandler(event);
    });

    deleteIcon.addEventListener("click", (event) => {
      if (event.target.closest(".visitCard__container--deleteIcon")) {
        // будет вызываться отдельная модалка для подтверждения удаления карточки
        deleteHandler(event); // функция-обработчик кнопки удаления
        // event.target.closest(".visitCard__container").style.display = "none";
      }
    });

    let fragment = document.createDocumentFragment();
    fragment.append(showMoreBtn);
    fragment.append(editBtn);
    fragment.append(deleteIcon);
    return fragment;
  }
}

export { Visit };

const visitCardContainer = document.querySelector("#root");

const visitCard = document.createElement("div");
visitCard.className = "visitCard__container";
visitCardContainer.append(visitCard);

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

    //  вывод информации которая должна показываться сразу
    visitCard.append(fio);
    visitCard.append(doctor);
    visitCard.append(showMoreBtn);
    visitCard.append(editBtn);
    visitCard.append(deleteIcon);

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
        event.target.closest(".visitCard__container").style.display = "none";
      }
    });

    return visitCard;
  }
}

const test = new Visit( // was crated for tests, might still need it
  "Anastasiia M.",
  "Doctor Doc.",
  "i'm sick",
  "slept bad.",
  "high"
);
test.render();
// // // export { test };

class VisitDentist extends Visit {
  constructor(fio, doctor, purpose, description, priority, lastVisit) {
    super(fio, doctor, purpose, description, priority);
    this.lastVisit = lastVisit;
  }
  render() {
    super.render();
    const lastVisit = document.createElement("p");
    lastVisit.className = "visitCard__container--lastVisit";
    lastVisit.textContent = this.lastVisit;

    visitCard.append(lastVisit);

    console.log(visitCard);
    return visitCard;
  }
}

const test2 = new VisitDentist( // was crated for tests, might still need it
  "AnaM.",
  "xdfgh.",
  "i'm asdf",
  "asdf bad.",
  "asdf",
  "new test"
);
test2.render();

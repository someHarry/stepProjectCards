//  это класс для Карточки, которая создается по клику, появляется на доске задач.

class Visit {
  constructor(fio, doctor, purpose, description, priority) {
    this.fio = fio;
    this.doctor = doctor;
    this.purpose = purpose;
    this.description = description;
    this.priority = priority;
  }
  render() {
    const visitCard = document.createElement("div"); //  контейнер для карточки
    visitCard.className = "visitCard__container";
    

    const showMoreBtn = document.createElement("button");
  }
}


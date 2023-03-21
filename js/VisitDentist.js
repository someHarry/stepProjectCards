import { Visit } from "./Visit.js";

class VisitDentist extends Visit {
  constructor({
    id,
    fio,
    doctor,
    purpose,
    description,
    priority,
    status,
    lastVisit,
  }) {
    super({ id, fio, doctor, purpose, description, priority, status });
    this.lastVisit = lastVisit;
  }
  render() {
    let visitCard = super.render();
    const lastVisit = document.createElement("p");
    lastVisit.className = "visitCard__container--lastVisit hidden latent";
    lastVisit.textContent = this.lastVisit;

    visitCard.append(lastVisit);

    console.log(visitCard);

    visitCard.append(super.Btns());

    return visitCard;
  }
}

export { VisitDentist };

import { Visit } from "./Visit.js";

class VisitTherapist extends Visit {
  constructor({ id, fio, doctor, purpose, description, priority, status, age }) {
    super({ id, fio, doctor, purpose, description, priority, status });
    this.age = age;
  }
  render() {
    let visitCard = super.render();
    const age = document.createElement("p");
    age.className = "visitCard__container--age";
    age.textContent = this.age;

    visitCard.append(age);

    console.log(visitCard);
    return visitCard;
  }
}

export { VisitTherapist };

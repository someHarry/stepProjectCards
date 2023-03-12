import { visitCard, Visit } from "./Visit.js";

class VisitCardiolog extends Visit {
  constructor(
    fio,
    doctor,
    purpose,
    description,
    priority,
    age,
    bodyMass,
    normPressure,
    prevDiseases
  ) {
    super(fio, doctor, purpose, description, priority);
    this.normPressure = normPressure;
    this.bodyMass = bodyMass;
    this.prevDiseases = prevDiseases;
    this.age = age;
  }

  render() {
    super.render();
    const age = document.createElement("p");
    age.className = "visitCard__container--age";
    age.textContent = this.age;

    const bodyMass = document.createElement("p");
    bodyMass.className = "visitCard__container--bodyMass";
    bodyMass.textContent = this.bodyMass;

    const normPressure = document.createElement("p");
    normPressure.className = "visitCard__container--normPressure";
    normPressure.textContent = this.normPressure;

    const prevDiseases = document.createElement("p");
    prevDiseases.className = "visitCard__container--prevDiseases";
    prevDiseases.textContent = this.prevDiseases;

    visitCard.append(age);
    visitCard.append(bodyMass);
    visitCard.append(normPressure);
    visitCard.append(prevDiseases);

    console.log(visitCard);
    return visitCard;
  }
}

export { VisitCardiolog };

import { Visit } from "./Visit.js";

class VisitCardiolog extends Visit {
  constructor({
    id,
    fio,
    doctor,
    purpose,
    description,
    priority,
    status,
    age,
    bodyMass,
    normPressure,
    prevDiseases,
  }) {
    super({ id, fio, doctor, purpose, description, priority, status });
    this.normPressure = normPressure;
    this.bodyMass = bodyMass;
    this.prevDiseases = prevDiseases;
    this.age = age;
  }

  render() {
    let visitCard = super.render();
    const age = document.createElement("p");
    age.className = "visitCard__container--age hidden latent";
    age.textContent = this.age;

    const bodyMass = document.createElement("p");
    bodyMass.className = "visitCard__container--bodyMass hidden latent";
    bodyMass.textContent = this.bodyMass;

    const normPressure = document.createElement("p");
    normPressure.className = "visitCard__container--normPressure hidden latent";
    normPressure.textContent = this.normPressure;

    const prevDiseases = document.createElement("p");
    prevDiseases.className = "visitCard__container--prevDiseases hidden latent";
    prevDiseases.textContent = this.prevDiseases;

    visitCard.append(age);
    visitCard.append(bodyMass);
    visitCard.append(normPressure);
    visitCard.append(prevDiseases);

    console.log(visitCard);

    visitCard.append(super.Btns());

    return visitCard;
  }
}

export { VisitCardiolog };

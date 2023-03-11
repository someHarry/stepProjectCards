import { Visit } from "./Visit.js";

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
}

export { VisitCardiolog };

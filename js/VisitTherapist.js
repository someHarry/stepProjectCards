import { Visit } from "./Visit.js";

class VisitTherapist extends Visit {
  constructor(fio, doctor, purpose, description, priority, age) {
    super(fio, doctor, purpose, description, priority);
    this.age = age;
  }
}

export { VisitTherapist };

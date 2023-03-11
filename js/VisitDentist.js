import { Visit } from "./Visit.js";


class VisitDentist extends Visit {
  constructor(fio, doctor, purpose, description, priority, lastVisit) {
    super(fio, doctor, purpose, description, priority);
    this.lastVisit = lastVisit;
  }
}

export { VisitDentist };

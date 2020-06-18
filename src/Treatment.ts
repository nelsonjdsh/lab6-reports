export class Treatment {
  id?: number;
  idCard?: string;
  medicine?: string;
  quantity?: number;
  nurse?: string;
  doctor?: string;
  registrationDate?: Date;

  constructor(treatment: Treatment) {
    this.id = treatment.id;
    this.idCard = treatment.idCard;
    this.medicine = treatment.medicine;
    this.quantity = treatment.quantity;
    this.nurse = treatment.nurse;
    this.doctor = treatment.doctor;
    this.registrationDate = treatment.registrationDate;
  }

  static getData(): Array<Treatment> {
    return [
      new Treatment({
        id: 1,
        idCard: "40227150253",
        nurse: "Emy Espinal",
        doctor: "Nelson Santos",
        medicine: "Aspirina",
        quantity: 4,
        registrationDate: new Date(Date.now())
      }),
      new Treatment({
        id: 2,
        idCard: "40127150253",
        nurse: "Abigail Santos",
        doctor: "Mikhael Santos",
        medicine: "Aspirina",
        quantity: 3,
        registrationDate: new Date(Date.now())
      })
    ]
  }
}


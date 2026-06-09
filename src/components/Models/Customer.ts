import { IBuyer, IBuyerErrors, TPayment } from "../../types/index.ts";

export class Customer {
  payment: TPayment = "";
  address: string = "";
  phone: string = "";
  email: string = "";

  constructor() {}

  saveData(data: Partial<IBuyer>): void {
    Object.assign(this, data);
  }
  getData(): IBuyer {
    return {
      payment: this.payment,
      address: this.address,
      phone: this.phone,
      email: this.email,
    };
  }
  clearData(): void {
    this.payment = "";
    this.address = "";
    this.phone = "";
    this.email = "";
  }
  validate(): IBuyerErrors {
    const errors: IBuyerErrors = {};

    if (!this.payment) {
      errors.payment = "Не выбран вид оплаты";
    }

    if (!this.address) {
      errors.address = "Укажите адрес";
    }

    if (!this.email) {
      errors.email = "Укажите емэйл";
    }

    if (!this.phone) {
      errors.phone = "Укажите телефон";
    }

    return errors;
  }
}

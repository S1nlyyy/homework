export class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  info() {
    console.info(`Автомобіль: ${this.brand} ${this.model}`);
  }
}
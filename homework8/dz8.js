import { Car } from "./car.js";
import { increment, decrement, getValue } from "./counter.js";
import "./app.js";
import { isValidEmail, isValidPhone } from "./validator.js";

const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("BMW", "X5");
car1.info();
car2.info();

console.log(getValue());
increment();
increment();
console.log(getValue());
decrement();
console.log(getValue());
let count = 999;
console.log(getValue());

const myEmail = "paniotandrew5269@gmail.com";
console.log(myEmail, isValidEmail(myEmail));
console.log(isValidPhone("+380501234567"));
// №1
const person = {
  name: "Олександр",
  age: 20,
  isStudent: true
};

console.log(person.name);
console.log(person.age);
console.log(person.isStudent);


// №2
// 1. 
const randomNumber = Math.random() * 100 + 1;
console.log("Випадкове число:", randomNumber);

// 2. 
const roundedDown = Math.floor(randomNumber);
console.log("Округлення вниз (Math.floor):", roundedDown);

// 3. 
const roundedUp = Math.ceil(randomNumber);
console.log("Округлення вгору (Math.ceil):", roundedUp);
const str = "42.7";

// №3

const intResult = parseInt(str);

const floatResult = parseFloat(str);

console.log("parseInt:", intResult);        
console.log("parseFloat:", floatResult);   

// №4
const value = "abc";


const convertedNumber = Number(value);


const checkNaN = isNaN(convertedNumber);

console.log("Результат перетворення:", convertedNumber); 
console.log("Чи є це NaN (не число)?", checkNaN);  

  // 5№
const passwordLength = 8;
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let password = "";
for (let i = 0; i < passwordLength; i++) {
  const randomIndex = Math.floor(Math.random() * chars.length);
  password += chars[randomIndex];
}
console.log("Згенерований пароль:", password);
// №6
const now = new Date();
const currentDate = now.toLocaleDateString();
const currentTime = now.toLocaleTimeString();
console.log(`Hello! Today is ${currentDate} and now it is ${currentTime}.`); 

// №7
const celsiusInput = prompt("Введіть температуру в градусах Цельсія:");
const celsius = Number(celsiusInput);
const fahrenheit = celsius * 9 / 5 + 32;
console.log(`Температура за Цельсієм: ${celsius}°C`);
console.log(`Температура за Фаренгейтом: ${fahrenheit}°F`);
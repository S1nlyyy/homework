
// 1
const numbers1 = [1, 2, 3, 4, 5];
const reversedNumbers = [];
for (let i = numbers1.length - 1; i >= 0; i--) {
    reversedNumbers.push(numbers1[i]);
}
console.log("1. Зворотний масив:", reversedNumbers);


// 2
const numbers2 = [0, 5, 12, 0, 3, 0, 42];
const nonZeroNumbers = [];
for (const num of numbers2) {
    if (num !== 0) {
        nonZeroNumbers.push(num);
    }
}
console.log("2. Без нулів:", nonZeroNumbers);


// 3
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [];
for (const item of array1) {
    combinedArray.push(item);
}
for (const item of array2) {
    combinedArray.push(item);
}
console.log("3. Поєднаний масив:", combinedArray);


// 4
const numbers4 = [1, 2, 3, 2, 4, 2, 5];
const targetNumber = 2;
let count = 0;
for (const num of numbers4) {
    if (num === targetNumber) {
        count++;
    }
}
console.log(`4. Число ${targetNumber} зустрічається разів:`, count);


// 5
const numbers5 = [1, 3, 5, 7, 9];
let isSorted = true;
for (let i = 0; i < numbers5.length - 1; i++) {
    if (numbers5[i] > numbers5[i + 1]) {
        isSorted = false;
        break;
    }
}
console.log("5. Масив відсортовано за зростанням?", isSorted);


// 6
const numbers6 = [4, 3, 2, 3, 4, 1];
let firstDuplicate = null;
for (let i = 0; i < numbers6.length; i++) {
    for (let j = i + 1; j < numbers6.length; j++) {
        if (numbers6[i] === numbers6[j]) {
            firstDuplicate = numbers6[i];
            break;
        }
    }
    if (firstDuplicate !== null) break;
}
console.log("6. Перше число-дублікат:", firstDuplicate);


// 7
const numbers7 = [10, 20, 30, 40, 50];
if (numbers7.length > 1) {
    let temp = numbers7[0];
    numbers7[0] = numbers7[numbers7.length - 1];
    numbers7[numbers7.length - 1] = temp;
}
console.log("7. Після заміни першого та останнього:", numbers7);


// 8
const numbers8 = [1, 2, 2, 3, 4, 4, 5, 1];
const uniqueNumbers = [];
for (const num of numbers8) {
    let isUnique = true;
    for (const uniqueNum of uniqueNumbers) {
        if (num === uniqueNum) {
            isUnique = false;
            break;
        }
    }
    if (isUnique) {
        uniqueNumbers.push(num);
    }
}
console.log("8. Лише унікальні елементи:", uniqueNumbers);


// 9
const strings = ["яблуко", "апельсин", "ківі", "кавун"];
let longestString = strings[0] || "";
for (const str of strings) {
    if (str.length > longestString.length) {
        longestString = str;
    }
}
console.log("9. Найдовший рядок:", longestString);


// 10
const numbers10 = [5, 2, 9, 1, 5, 6];
for (let i = 0; i < numbers10.length; i++) {
    for (let j = 0; j < numbers10.length - 1 - i; j++) {
        if (numbers10[j] > numbers10[j + 1]) {
            let temp = numbers10[j];
            numbers10[j] = numbers10[j + 1];
            numbers10[j + 1] = temp;
        }
    }
}
console.log("10. Відсортовано без sort():", numbers10);
// function goodMorning(){
//     console.log("Good Morning");
// }
// function goodEvening(){
//     console.log("Good Evening");
// }
// let message = goodMorning;      // присвоюємо змінній message функцію goodMorning
// message();      // Доброго ранку
// message = goodEvening;          // змінюємо функцію змінної message
// message();      // Доброго вечора



// 1)
function welcomePlayer(playerName) {
    return `Вітаємо у грі, ${playerName}!`;
}

console.log(welcomePlayer("Артем")); 


// 2) 
function calculate(a, b, c, operation) {
    if (operation === "add") {
        return a + b + c;
    } else if (operation === "subtract") {
        return a - b - c;
    } else if (operation === "multiply") {
        return a * b * c;
    }
    return 0;
}

console.log(calculate(10, 5, 2, "add"));      // 17
console.log(calculate(10, 5, 2, "subtract")); // 3
console.log(calculate(2, 3, 4, "multiply"));  // 24



// 3) 

function getRequiredExp(level) {
    
    return level * 1000;
}

console.log(getRequiredExp(5)); 

// 4) 
function executeFunction(func, x, y) {
    return func(x, y);
}


function sum(x, y) {
    return x + y;
}

console.log(executeFunction(sum, 15, 25)); 



// 5) 
const calculateGold = (gold, bonusPercent) => gold + (gold * bonusPercent / 100);

let totalGold = calculateGold(500, 20); 
console.log(totalGold); 
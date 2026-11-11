
// 1
console.log("--- Завдання 1 ---");

function createPlayerSettings() {
    let settings = {
        theme: "dark",
        volume: 75,
        graphics: "high"
    };

    return {
        getSetting(key) {
            return settings[key];
        },
        updateSetting(key, value) {
            settings[key] = value;
            console.log(`Налаштування ${key} змінено на: ${value}`);
        }
    };
}

const mySettings = createPlayerSettings();
console.log("Початкова гучність:", mySettings.getSetting("volume")); // 75
mySettings.updateSetting("volume", 90);
console.log("Нова гучність:", mySettings.getSetting("volume")); // 90



//2
console.log("\n--- Завдання 2 ---");

(function() {
    const launchMessage = "Гра успішно завантажена! Всі модулі ініціалізовано.";
    console.log(launchMessage);
})();



// 3
console.log("\n--- Завдання 3 ---");

const getPlayerGold = (function() {
    let gold = 1000; 

    return function() {
        return gold;
    };
})();

console.log("Золото гравця:", getPlayerGold()); 



//  4
console.log("\n--- Завдання 4 ---");

const playerModule = (function() {
    let name = "Герой";
    let level = 1;

    return {
        getName() {
            return name;
        },
        setName(newName) {
            name = newName;
            console.log(`Ім'я змінено на: ${name}`);
        },
        getLevel() {
            return level;
        }
    };
})();

console.log("Ім'я гравця:", playerModule.getName()); // "Герой"
playerModule.setName("Одіссей");
console.log("Нове ім'я гравця:", playerModule.getName()); // "Одіссей"
console.log("Рівень гравця:", playerModule.getLevel()); // 1



// 5
console.log("\n--- Завдання 5 ---");

const inventoryModule = (function() {
    let itemCount = 5;

    return {
        addItem(amount) {
            itemCount += amount;
            console.log(`Додано предметів: ${amount}. Всього: ${itemCount}`);
        },
        removeItem(amount) {
            if (itemCount >= amount) {
                itemCount -= amount;
                console.log(`Видалено предметів: ${amount}. Залишилось: ${itemCount}`);
            } else {
                console.log("Недостатньо предметів в інвентарі!");
            }
        },
        getCount() {
            return itemCount;
        }
    };
})();

inventoryModule.addItem(3);
inventoryModule.removeItem(2);
console.log("Поточна кількість предметів:", inventoryModule.getCount()); // 6



//  6
console.log("\n--- Завдання 6 ---");

const characterModule = (function() {
    let level = 1;

    return {
        levelUp() {
            level++;
            console.log(`Рівень підвищено! Поточний рівень: ${level}`);
        },
        getLevel() {
            return level;
        },
        resetLevel() {
            level = 1;
            console.log("Рівень скинуто до початкового (1).");
        }
    };
})();

console.log("Початковий рівень:", characterModule.getLevel()); // 1
characterModule.levelUp(); // 2
characterModule.resetLevel(); // 1
console.log("Рівень після скидання:", characterModule.getLevel()); // 1



//7
console.log("\n--- Завдання 7 ---");

function countdown(n) {
    if (n < 0) {
        return;
    }
    console.log(n);
    countdown(n - 1);
}

console.log("Зворотний відлік від 5:");
countdown(5);
// 1№
const productName = prompt("Введіть назву товару:");
const priceInput = prompt("Введіть ціну за одиницю (грн):");
const quantityInput = prompt("Введіть кількість одиниць:");
const discountInput = prompt("Введіть відсоток базової знижки (0-100):");

const price = Number(priceInput);
const quantity = Number(quantityInput);
const baseDiscount = Number(discountInput);

if (isNaN(price) || price <= 0 || isNaN(quantity) || quantity <= 0 || !Number.isInteger(quantity) || isNaN(baseDiscount) || baseDiscount < 0 || baseDiscount > 100) {
    console.log("Помилка: Некоректні вхідні дані! Перевірте правильність введених чисел.");
} else {
    const subtotal = price * quantity;
    const baseDiscountAmount = subtotal * (baseDiscount / 100);
    let finalSum = subtotal - baseDiscountAmount;

    let bonusDiscountApplied = false;
    let bonusDiscountAmount = 0;

    if (finalSum > 2000) {
        bonusDiscountAmount = finalSum * 0.05;
        finalSum -= bonusDiscountAmount;
        bonusDiscountApplied = true;
    }

    const totalDiscountAmount = baseDiscountAmount + bonusDiscountAmount;

    console.log(`--- ДЕТАЛЬНИЙ ЧЕК ---`);
    console.log(`Товар: ${productName}`);
    console.log(`Ціна за од.: ${price.toFixed(2)} грн`);
    console.log(`Кількість: ${quantity} шт.`);
    console.log(`Сума без знижки: ${subtotal.toFixed(2)} грн`);
    console.log(`Базова знижка (${baseDiscount}%): -${baseDiscountAmount.toFixed(2)} грн`);

    if (bonusDiscountApplied) {
        console.log(`Бонусна знижка (5% за суму > 2000 грн): -${bonusDiscountAmount.toFixed(2)} грн`);
    }

    console.log(`Загальна сума знижки: ${totalDiscountAmount.toFixed(2)} грн`);
    console.log(`ОСТАТОЧНА СУМА ДО СПЛАТИ: ${finalSum.toFixed(2)} грн`);
}

// №2
const userName = prompt("Введіть ваше ім'я:");
const birthDateStr = prompt("Введіть дату народження у форматі РРРР-ММ-ДД (наприклад, 2005-04-15):");
const mood = prompt("Який у вас сьогодні настрій?");

const birthDate = new Date(birthDateStr);

if (isNaN(birthDate.getTime())) {
    console.log("Помилка: Некоректний формат дати народження.");
} else {
    const day = birthDate.getDate();
    const month = birthDate.getMonth() + 1; // Місяці в JS від 0 до 11

    // Визначення знака зодіаку
    let zodiac = "";
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) zodiac = "Овен";
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) zodiac = "Телець";
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) zodiac = "Близнюки";
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) zodiac = "Рак";
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) zodiac = "Лев";
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) zodiac = "Діва";
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) zodiac = "Терези";
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) zodiac = "Скорпіон";
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) zodiac = "Стрілець";
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) zodiac = "Козоріг";
    else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) zodiac = "Водолій";
    else zodiac = "Риби";

    // Генерація рівня удачі (1 - 100)
    const luckLevel = Math.floor(Math.random() * 100) + 1;

    console.log(`✨ ПЕРСОНАЛЬНИЙ ПРОГНОЗ ДЛЯ ${userName.toUpperCase()} ✨`);
    console.log(`Знак зодіаку: ${zodiac}`);
    console.log(`Ваш настрій: ${mood}`);
    console.log(`Рівень удачі на сьогодні: ${luckLevel}%`);

    if (luckLevel > 70) {
        console.log(`Прогноз: Сьогодні чудовий день! Твій настрій (${mood}) та висока удача допоможуть звернути гори.`);
    } else if (luckLevel >= 40) {
        console.log(`Прогноз: День буде спокійним та продуктивним. Удача на твоєму боці!`);
    } else {
        console.log(`Прогноз: Не зважай на низький рівень удачі, твій позитивний настрій подолає всі труднощі!`);
    }
}

// №3
const sentence = prompt("Введіть довільне речення:");

if (!sentence || sentence.trim().length === 0) {
    console.log("Помилка: Ви нічого не ввели.");
} else {
    const totalChars = sentence.length;
    const charsWithoutSpaces = sentence.replace(/\s+/g, "").length;
    const words = sentence.trim().split(/\s+/);
    const wordCount = words.length;

    const firstChar = sentence[0];
    const lastChar = sentence[sentence.length - 1];

    let maxWordLength = 0;
    for (let word of words) {
        if (word.length > maxWordLength) {
            maxWordLength = word.length;
        }
    }

    const spaceCount = totalChars - sentence.replace(/ /g, "").length;
    const spacePercentage = ((spaceCount / totalChars) * 100).toFixed(2);

    const startsWithCapital = firstChar === firstChar.toUpperCase() && firstChar.toLowerCase() !== firstChar.toUpperCase();
    const endsWithPunctuation = [".", "?", "!"].includes(lastChar);

    let rating = "";
    if (startsWithCapital && endsWithPunctuation && wordCount >= 3) {
        rating = "Чудово";
    } else if (startsWithCapital || endsWithPunctuation) {
        rating = "Добре";
    } else {
        rating = "Потрібно допрацювати";
    }

    console.log(`--- АНАЛІЗ ТЕКСТУ ---`);
    console.log(`Всього символів: ${totalChars}`);
    console.log(`Символів без пробілів: ${charsWithoutSpaces}`);
    console.log(`Кількість слів: ${wordCount}`);
    console.log(`Перший символ: "${firstChar}", Останній символ: "${lastChar}"`);
    console.log(`Довжина найдовшого слова: ${maxWordLength}`);
    console.log(`Відсоток пробілів: ${spacePercentage}%`);
    console.log(`Оцінка тексту: "${rating}"`);
}

// 4№

const ownerName = prompt("Введіть ім'я власника рахунку:");
const initialBalanceInput = prompt("Введіть початковий баланс (грн):");
const initialBalance = Number(initialBalanceInput);

if (isNaN(initialBalance) || initialBalance < 0) {
    console.log("Помилка: Некоректний початковий баланс.");
} else {
    const account = {
        owner: ownerName,
        balance: initialBalance,
        currency: "UAH"
    };

    const action = prompt("Оберіть операцію: 1 - поповнення, 2 - зняття коштів, 3 - перегляд балансу");

    if (action === "1") {
        const amount = Number(prompt("Введіть суму поповнення:"));
        if (isNaN(amount) || amount <= 0) {
            console.log("Помилка: Сума повинна бути додатною.");
        } else if (confirm(`Підтверджуєте поповнення на суму ${amount.toFixed(2)} грн?`)) {
            const oldBalance = account.balance;
            account.balance += amount;
            console.log(`--- ЧЕК ОПЕРАЦІЇ ---`);
            console.log(`Власник: ${account.owner}`);
            console.log(`Початковий баланс: ${oldBalance.toFixed(2)} ${account.currency}`);
            console.log(`Операція: Поповнення (+${amount.toFixed(2)} ${account.currency})`);
            console.log(`Новий баланс: ${account.balance.toFixed(2)} ${account.currency}`);
        }
    } else if (action === "2") {
        const amount = Number(prompt("Введіть суму зняття:"));
        if (isNaN(amount) || amount <= 0) {
            console.log("Помилка: Сума повинна бути додатною.");
        } else if (amount > account.balance) {
            console.log("Помилка: Недостатньо коштів на рахунку.");
        } else if (confirm(`Підтверджуєте зняття коштів на суму ${amount.toFixed(2)} грн?`)) {
            const oldBalance = account.balance;
            account.balance -= amount;
            console.log(`--- ЧЕК ОПЕРАЦІЇ ---`);
            console.log(`Власник: ${account.owner}`);
            console.log(`Початковий баланс: ${oldBalance.toFixed(2)} ${account.currency}`);
            console.log(`Операція: Зняття коштів (-${amount.toFixed(2)} ${account.currency})`);
            console.log(`Новий баланс: ${account.balance.toFixed(2)} ${account.currency}`);
        }
    } else if (action === "3") {
        console.log(`Поточний баланс рахунку (${account.owner}): ${account.balance.toFixed(2)} ${account.currency}`);
    } else {
        console.log("Невідома операція.");
    }
}

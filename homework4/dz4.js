

// 1) 
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let testEmail = "test@example.com";
console.log("1) Email правильний?", emailRegex.test(testEmail)); 


// 2) 
const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
let testUrl = "https://www.example.com";
console.log("2) URL правильний?", urlRegex.test(testUrl)); 


// 3) 
let htmlString = "<div><p>Привіт</p><a href='index.html'>Головна</a></div>";
const htmlTagRegex = /<\/?[a-z][\w-]*(\s+[^\s>]*)?>/gi;
console.log("3) Знайдені HTML-теги:", htmlString.match(htmlTagRegex)); 



// 4) 
const aTagContentRegex = /<a\b[^>]*>(.*?)<\/a>/gi;
console.log("4) Вміст тегів <a>:");
let match;
while ((match = aTagContentRegex.exec(htmlString)) !== null) {
  console.log(match[1]);
}


// 5)
let colorText = "Основний колір #FF5733, а додатковий #000000, помилка #123";
const hexColorRegex = /#[0-9a-fA-F]{6}\b/g;
console.log("5) Знайдені кольори:", colorText.match(hexColorRegex)); 


// 6) 
let mixedText = "Привіт, JavaScript та Python 2026!";
const latinWordsRegex = /[a-zA-Z]+/g;
console.log("6) Слова лише з латинських літер:", mixedText.match(latinWordsRegex)); 



// 7) 
const cyrillicWordsRegex = /[а-яА-ЯіїєґІЇЄҐ]+/g;
console.log("7) Слова лише з кириличних літер:", mixedText.match(cyrillicWordsRegex)); 



// 8)
const ipv4Regex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
let testIp = "192.168.1.1";
console.log("8) IP-адреса правильна?", ipv4Regex.test(testIp)); 


// 9)
let repeatedText = "Це це дуже дуже гарний день день";
const duplicateWordRegex = /\b([a-zA-Zа-яА-ЯіІїЇєЄґҐ]+)\s+\1\b/gi;
console.log("9) Слова, що повторюються поспіль:", repeatedText.match(duplicateWordRegex)); 



// 10)
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
let testPassword = "SuperPassword1!";
console.log("10) Пароль відповідає вимогам?", passwordRegex.test(testPassword)); 
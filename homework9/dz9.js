// 1
class Person {
  constructor(firstName = "", lastName = "") {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }

  set fullName(value) {
    const parts = String(value).trim().split(/\s+/);
    this.firstName = parts[0] || "";
    this.lastName = parts.slice(1).join(" ") || "";
  }
}

const person = new Person("Ivan", "Petrenko");
console.log("1. Начальное fullName:", person.fullName); 

person.fullName = "John Smith";
console.log("1. После изменения fullName:", person.fullName); 
console.log("1. firstName:", person.firstName); 
console.log("1. lastName:", person.lastName); 

//2
class BankAccount {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance >= 0 ? initialBalance : 0;
  }

  deposit(amount) {
    if (typeof amount !== "number" || Number.isNaN(amount) || amount <= 0) {
      console.log("2. Сумма пополнения должна быть больше 0.");
      return;
    }
    this.#balance += amount;
  }

  withdraw(amount) {
    if (typeof amount !== "number" || Number.isNaN(amount) || amount <= 0) {
      console.log("2. Сумма снятия должна быть больше 0.");
      return;
    }
    if (amount > this.#balance) {
      console.log("2. Недостаточно средств на счёте!");
      return;
    }
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);
console.log("2. Баланс после пополнения:", account.getBalance()); 

account.withdraw(200); 
account.withdraw(40);
console.log("2. Баланс после снятия:", account.getBalance()); 

account.balance = 999999;
console.log("2. Реальный баланс:", account.getBalance()); 

//3
class User {
  static #count = 0;

  constructor(name, email) {
    User.#count += 1;
    this.id = User.#count;
    this.name = name;
    this.email = email;
  }

  getInfo() {
    return `ID: ${this.id}, Имя: ${this.name}, Email: ${this.email}`;
  }

  static getTotalUsers() {
    return User.#count;
  }
}

const user1 = new User("Олена", "olena@example.com");
const user2 = new User("Максим", "max@example.com");
const user3 = new User("Софія", "sofia@example.com");

console.log("3.", user1.getInfo()); 
console.log("3.", user2.getInfo());
console.log("3.", user3.getInfo());
console.log("3. Всего пользователей:", User.getTotalUsers()); 
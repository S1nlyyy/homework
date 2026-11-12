
// 1)

const character = {
  name: "Артур",
  level: 1,
  maxHealth: 100,
  health: 100,
  maxMana: 50,
  mana: 50,
  stats: {
    strength: 15,
    agility: 10,
    intelligence: 8
  },
  inventory: ["меч", "злиття здоров'я"],
  activeEffects: ["посилення атаки"],

  
  takeDamage(amount) {
    this.health -= amount;
    if (this.health < 0) {
      this.health = 0;
    }
    console.log(`[Завдання 1] ${this.name} отримав ${amount} шкоди. Здоров'я: ${this.health}/${this.maxHealth}`);
  },

  
  heal(amount) {
    this.health += amount;
    if (this.health > this.maxHealth) {
      this.health = this.maxHealth;
    }
    console.log(`[Завдання 1] ${this.name} відновлено ${amount} здоров'я. Здоров'я: ${this.health}/${this.maxHealth}`);
  },

  
  levelUp() {
    this.level += 1;
    this.maxHealth += 20;
    this.health = this.maxHealth;
    console.log(`[Завдання 1] Вітаємо! ${this.name} перейшов на ${this.level} рівень!`);
  },

  
  addItem(item) {
    this.inventory.push(item);
    console.log(`[Завдання 1] Предмет "${item}" додано до інвентарю.`);
  }
};


character.takeDamage(30);
character.heal(15);
character.levelUp();
character.addItem("щит");



// 2)


const settingsKeys = ["theme", "notifications", "language", "volume"];
const userSettings = {};

settingsKeys.forEach((key, index) => {
  userSettings[key] = `default_${index + 1}`;
});


const settingsManager = {
  settings: userSettings,

  setSetting(key, value) {
    this.settings[key] = value;
    console.log(`[Завдання 2] Налаштування "${key}" змінено на:`, value);
  },


  removeSetting(key) {
    delete this.settings[key];
    console.log(`[Завдання 2] Налаштування "${key}" видалено.`);
  },

  getSetting(key) {
    return this.settings[key];
  }
};


console.log("[Завдання 2] Ключі налаштувань:", Object.keys(userSettings));
console.log("[Завдання 2] Усі пари ключ-значення:", Object.entries(userSettings));


const clonedEntries = Object.fromEntries(Object.entries(userSettings));
console.log("[Завдання 2] Клоновано через fromEntries:", clonedEntries);

settingsManager.setSetting("theme", "dark");
console.log("[Завдання 2] Отримання theme:", settingsManager.getSetting("theme"));



// 3)

const complexUser = {
  personalData: { name: "Ольга", age: 28 },
  settings: { theme: "light", sound: true },
  address: { city: "Київ", street: "Хрещатик" },
  friends: ["Максим", "Андрій"],
  history: [{ action: "login", time: "10:00" }]
};

function deepClone(obj) {
 
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

 
  const clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

const userCopy = deepClone(complexUser);


userCopy.personalData.name = "Ірина";
userCopy.friends.push("Світлана");

console.log("[Завдання 3] Оригінальне ім'я:", complexUser.personalData.name); 
console.log("[Завдання 3] Скопійоване ім'я:", userCopy.personalData.name);     
console.log("[Завдання 3] Друзі оригінал:", complexUser.friends);            
console.log("[Завдання 3] Друзі копія:", userCopy.friends);                  



// 4)

const store = {
  products: [
    { id: 1, name: "Ленточний ноутбук", price: 1200, category: "Електроніка", quantity: 5 },
    { id: 2, name: "Мишка", price: 25, category: "Аксесуари", quantity: 20 },
    { id: 3, name: "Клавіатура", price: 75, category: "Аксесуари", quantity: 10 }
  ],

  
  changeQuantity(id, amount) {
    const product = this.findProductById(id);
    if (product) {
      product.quantity += amount;
      if (product.quantity < 0) product.quantity = 0;
      console.log(`[Завдання 4] Кількість товару "${product.name}" змінено. Нова кількість: ${product.quantity}`);
    }
  },

  
  findProductById(id) {
    return this.products.find(p => p.id === id);
  },

  searchProduct(query) {
    return this.products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
  },

  
  removeProduct(id) {
    this.products = this.products.filter(p => p.id !== id);
    console.log(`[Завдання 4] Товар з ID ${id} видалено з магазину.`);
  },

  
  changePrice(id, newPrice) {
    const product = this.findProductById(id);
    if (product) {
      product.price = newPrice;
      console.log(`[Завдання 4] Ціну товару "${product.name}" змінено на ${newPrice}`);
    }
  },

  
  getTotalInventoryValue() {
    return this.products.reduce((total, p) => total + (p.price * p.quantity), 0);
  }
};


const baseProduct = { name: "Монітор", price: 300 };
const extraProps1 = { category: "Електроніка", quantity: 4 };
const extraProps2 = { warranty: "2 роки" };


const mergedProduct1 = Object.assign({}, baseProduct, extraProps1);

const mergedProduct2 = { ...baseProduct, ...extraProps1, ...extraProps2 };

console.log("[Завдання 4] Об'єднано через Object.assign:", mergedProduct1);
console.log("[Завдання 4] Об'єднано через spread (...):", mergedProduct2);
console.log("[Завдання 4] Загальна вартість складу:", store.getTotalInventoryValue());



// 5)

const CharacterProto = {
  init(name, health) {
    this.name = name;
    this.health = health;
    return this;
  },
  attack() {
    console.log(`[Завдання 5] ${this.name} здійснює базову атаку.`);
  }
};


const Warrior = Object.create(CharacterProto);
Warrior.initWarrior = function(name, health, armor) {
  this.init(name, health);
  this.armor = armor;
  return this;
};
Warrior.attack = function() {
  console.log(`[Завдання 5] Воїн ${this.name} завдає потужного удару мечем!`);
};
Warrior.shieldBash = function() {
  console.log(`[Завдання 5] ${this.name} оглушує щитом!`);
};


const Mage = Object.create(CharacterProto);
Mage.initMage = function(name, health, mana) {
  this.init(name, health);
  this.mana = mana;
  return this;
};
Mage.attack = function() {
  console.log(`[Завдання 5] Маг ${this.name} випускає вогняну кулю!`);
};
Mage.castSpell = function() {
  console.log(`[Завдання 5] ${this.name} читає заклинання телепортації.`);
};


const Archer = Object.create(CharacterProto);
Archer.initArcher = function(name, health, accuracy) {
  this.init(name, health);
  this.accuracy = accuracy;
  return this;
};
Archer.attack = function() {
  console.log(`[Завдання 5] Лучник ${this.name} стріляє з лука в ціль!`);
};
Archer.multiShot = function() {
  console.log(`[Завдання 5] ${this.name} робить залп із трьох стріл!`);
};


const myWarrior = Object.create(Warrior).initWarrior("Боріс", 150, 50);
const myMage = Object.create(Mage).initMage("Гендальф", 80, 200);
const myArcher = Object.create(Archer).initArcher("Леголас", 100, 95);

myWarrior.attack();
myWarrior.shieldBash();

myMage.attack();
myMage.castSpell();

myArcher.attack();
myArcher.multiShot();
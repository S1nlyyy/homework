// 1)
const products = [
  { name: "Ноутбук Pro 14", category: "electronics", price: 45000, quantity: 5, rating: 4.8, tempNote: "акция" },
  { name: "Беспроводная мышь", category: "electronics", price: 1200, quantity: 20, rating: 4.5, tempNote: "хит" },
  { name: "Кофеварка", category: "home", price: 6800, quantity: 8, rating: 4.9, tempNote: "новинка" },
  { name: "Книга по JS", category: "books", price: 950, quantity: 15, rating: 4.7, tempNote: "ограниченный тираж" },
  { name: "Настольная лампа", category: "home", price: 1500, quantity: 12, rating: 4.3, tempNote: "скидка" },
];

const cleanItem = (item) => {
  const copy = { ...item };
  delete copy.tempNote;
  return copy;
};

const toSafeNumber = (value, fallback = 0) =>
  typeof value === "number" && !Number.isNaN(value) ? value : fallback;

const getEmptyResult = () => void 0;

// 2)
const getProductNames = (items) =>
  items.map(({ name } = {}) => name ?? "Без названия");

// 3)
const filterByCategory = (items, targetCategory) =>
  items.filter((item) => item?.category === targetCategory);

// 4)
const sortByPrice = (items, direction = "asc") =>
  [...items].sort((a, b) => {
    const priceA = toSafeNumber(a?.price, 0);
    const priceB = toSafeNumber(b?.price, 0);
    return direction === "desc" ? priceB - priceA : priceA - priceB;
  });

// 5)
const getTotalWarehouseValue = (items) =>
  items.reduce((total, item) => {
    const price = toSafeNumber(item?.price, 0);
    const quantity = toSafeNumber(item?.quantity, 0);
    return total + price * quantity;
  }, 0);

// 6)
const applyDiscount = (items, discountPercent) => {
  const discount = toSafeNumber(discountPercent, 0);
  return items.map((item) => {
    const baseItem = cleanItem(item ?? {});
    const price = toSafeNumber(baseItem.price, 0);
    const discountedPrice = Number((price * (1 - discount / 100)).toFixed(2));
    return {
      ...baseItem,
      price: discountedPrice,
    };
  });
};

// 7)
const getMostPopularProduct = (items) => {
  if (!Array.isArray(items) || items.length === 0) {
    return getEmptyResult();
  }

  const best = items.reduce((leader, current) => {
    const leaderRating = toSafeNumber(leader?.rating, -Infinity);
    const currentRating = toSafeNumber(current?.rating, -Infinity);
    return currentRating > leaderRating ? current : leader;
  }, null);

  return best ? cleanItem(best) : getEmptyResult();
};

// 8)
console.log(getProductNames(products));
console.log(filterByCategory(products, "home"));
console.log(sortByPrice(products, "asc"));
console.log(sortByPrice(products, "desc"));
console.log(getTotalWarehouseValue(products));
console.log(applyDiscount(products, 15));
console.log(getMostPopularProduct(products));
console.log(products);
import { add, multiply } from "./math.js";
import { capitalize, reverseString } from "./string.js";
import { getUnique, sumArray } from "./array.js";

console.log(add(5, 3), multiply(4, 6));
console.log(capitalize("привіт"), reverseString("javascript"));
console.log(getUnique([1, 2, 2, 3, 4, 4]), sumArray([10, 20, 30]));
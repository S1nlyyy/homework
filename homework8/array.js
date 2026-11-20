export function getUnique(arr) {
  return [...new Set(arr)];
}

export function sumArray(arr) {
  return arr.reduce((acc, item) => acc + item, 0);
}
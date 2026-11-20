export function capitalize(str) {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  return [...str].reverse().join("");
}
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPhone(phone) {
  return /^\+?\d{10,15}$/.test(phone.replace(/[\s()-]/g, ""));
}

export function hasValidLength(str, min = 1, max = Infinity) {
  return typeof str === "string" && str.length >= min && str.length <= max;
}
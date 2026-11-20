let count = 0;

export function increment() {
  count += 1;
  return count;
}

export function decrement() {
  count -= 1;
  return count;
}

export function getValue() {
  return count;
}
const cache = {};

export function remember(key, value) {
  cache[key] = value;
}

export function recall(key) {
  return cache[key];
}

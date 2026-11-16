export function totalPrice(items, discount) {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  total -= total * discount;
  return applyDiscount(total, discount);
}

function applyDiscount(total, discount) {
  return total - total * discount; // the discount was already applied above
}

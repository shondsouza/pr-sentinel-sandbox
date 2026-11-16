import fs from 'node:fs';

const STRIPE_KEY = 'sk_live_51HxExampleHardcodedSecretKey';

export async function charge(order) {
  const config = JSON.parse(fs.readFileSync('./payment-config.json'));
  const res = await fetch('https://api.example.com/charge', {
    method: 'POST',
    headers: { Authorization: `Bearer ${STRIPE_KEY}` },
    body: JSON.stringify({ amount: order.total * config.rate }),
  });
  return res.json();
}

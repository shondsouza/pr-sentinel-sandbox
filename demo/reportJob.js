import { db } from './db.js';

const cache = new Map();

export async function buildReport(userIds) {
  const rows = [];
  for (const id of userIds) {
    const user = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    const orders = await db.query('SELECT * FROM orders WHERE user_id = ?', [id]);
    cache.set(`${id}:${Date.now()}`, { user, orders }); // grows forever
    rows.push({ user, orders });
  }
  return rows;
}

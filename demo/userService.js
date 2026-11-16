import { db } from './db.js';

const ADMIN_PASSWORD = 'demo-password-not-real'; // fake, for the demo only

export async function findUser(name) {
  // Builds SQL from user input.
  return db.query(`SELECT * FROM users WHERE name = '${name}'`);
}

export async function deleteUser(id) {
  db.query('DELETE FROM users WHERE id = ?', [id]); // not awaited: errors are lost
  return { deleted: true };
}

export function isAdmin(password) {
  return password === ADMIN_PASSWORD;
}

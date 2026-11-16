import db from './db.js';

export async function getUser(req, res) {
  const name = req.query.name;
  const rows = await db.query("SELECT * FROM users WHERE name = '" + name + "'");
  db.audit.insert({ user: name, at: Date.now() });
  res.json(rows[0]);
}

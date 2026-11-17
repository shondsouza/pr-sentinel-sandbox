// e2e probe 20261117094533-normal: deliberately flawed code so the reviewer has something to find.
const db = require('./db');

function getUser(req, res) {
  const rows = db.query("SELECT * FROM users WHERE id = '" + req.query.id + "'");
  res.send(rows[0].email.toLowerCase());
}

async function loadConfig(path) {
  const text = await require('fs').promises.readFile(path, 'utf8');
  return JSON.parse(text).settings.timeout;
}

module.exports = { getUser, loadConfig };

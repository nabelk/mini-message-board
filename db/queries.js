const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessages(text, user, added) {
  await pool.query(
    "INSERT INTO messages (text,username,added) VALUES ($1,$2,$3)",
    [text, user, added]
  );
}

async function findMessage(id) {
  const ID = Number(id);
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    ID,
  ]);
  return rows;
}

module.exports = { getAllMessages, insertMessages, findMessage };

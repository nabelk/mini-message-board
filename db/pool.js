require("dotenv").config();
const { Pool } = require("pg");

let pool;

const {
  NODE_ENV,
  DATABASE_URL,
  DB_HOST,
  DB_USER,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
} = process.env;
console.log(NODE_ENV);
if (NODE_ENV === "production") {
  pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
} else {
  pool = new Pool({
    host: DB_HOST,
    user: DB_USER,
    database: DB_NAME,
    password: DB_PASSWORD,
    port: DB_PORT || 5432,
  });
}

module.exports = pool;

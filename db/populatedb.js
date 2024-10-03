require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR(255),
  username VARCHAR(255),
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, username)
VALUES
('Hello World', 'Daiyan'),
('Hi There', 'Dian');
`;

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT, NODE_ENV } =
  process.env;

async function main() {
  console.log("seeding...");

  const clientParam = !process.argv[2]
    ? {
        connectionString: `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
      }
    : {
        connectionString: process.argv[2],
        ssl: {
          rejectUnauthorized: false,
        },
      };

  const client = new Client(clientParam);
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

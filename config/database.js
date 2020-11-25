const mysql = require('mysql')

const user = process.env.DATABASE_USER || 'root';
const password = process.env.DATABASE_PASSWORD || '';
const host = process.env.DATABASE_URL || 'localhost';
const database = process.env.DATABASE_NAME || 'mutation';

const connection = mysql.createConnection({
  user,
  password,
  host,
  database
});

module.exports = {
  connection
}
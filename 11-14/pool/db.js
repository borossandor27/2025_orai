import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true, // Várjon, ha nincs elérhető kapcsolat
  connectionLimit: 10, // Maximális kapcsolatok száma a poolban
  queueLimit: 0 // Nincs korlátozás a várakozási sor hosszára
});

export default pool;
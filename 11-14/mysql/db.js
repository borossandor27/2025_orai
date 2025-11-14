import 'dotenv/config';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.HOST || 'localhost',
  user: process.env.USER || 'root',
  password: process.env.PASSWORD || '',
  database: process.env.DATABASE || 'users_db',
  port: process.env.PORT || 3306,
    connectionLimit: 10, // Optional: limit number of connections
    // kapcsolatási időkorlát beállítása (opcionális)
    connectTimeout: 10000, // 10 másodperc
    // sorban álló lekérdezések időkorlátja (opcionális)
    queueLimit: 0, // nincs korlát
});

export default pool;
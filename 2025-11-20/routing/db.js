import mysql from 'mysql2/promise';

// Adatbázis kapcsolat létrehozása
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'webshop'
};

const pool = mysql.createPool(dbConfig);

export default pool;
import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mysql from 'mysql2/promise';
import 'dotenv/config.js';
const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET

app.use(cors()); // kikapcsolja a CORS-t
app.use(express.json()); // JSON body parser
const db = mysql.createPool({
  host: process.env.DB_HOST||'localhost',
  user: process.env.DB_USER||'root',
  password: process.env.DB_PASSWORD||'',
  database: process.env.DB_NAME||'auth',
});

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401); // Nincs token

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Érvénytelen token
    req.user = user;
    next();
  });
};
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

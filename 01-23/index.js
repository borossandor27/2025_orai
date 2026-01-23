import express from 'express';
import cors from 'cors';
import jwtwebtoken from 'jsonwebtoken';
import mysql from 'mysql2/promise';
import 'dotenv/config';
import bcrypt from 'bcryptjs';

const app = express();
app.use(cors());
app.use(express.json()); 

const db = await mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'auth',
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

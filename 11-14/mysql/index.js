import express from 'express';
import pool from './db.js';

const app = express();
const PORT = process.env.SERVERPORT || 3000;
app.use(express.json()); // az üzenet törzsét JSON-ként kezeli

// Felhasználók lekérdezése
app.get('/users', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
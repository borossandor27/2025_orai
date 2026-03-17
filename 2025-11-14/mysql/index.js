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

// Adott felhasználó lekérdezése ID alapján
app.get('/users/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const [rows] = await pool.execute('SELECT * FROM `users` WHERE `userid`= ?', [userId]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Új felhasználó létrehozása
app.post('/users', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const [result] = await pool.execute(
            'INSERT INTO `users` (`userid`, `username`, `email`, `password`) VALUES (NULL, ?, ?, ?)',
            [name, email, password]
        );
        res.status(201).json({ userid: result.insertId, name, email });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
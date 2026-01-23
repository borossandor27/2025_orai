import express from 'express';
import cors from 'cors';
import jwtwebtoken from 'jsonwebtoken';
import mysql from 'mysql2/promise';
import 'dotenv/config';
import bcrypt from 'bcrypt';

const app = express();
app.use(cors());
app.use(express.json());

const db = await mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'auth',
});
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

const generateToken = (user) => {
    return jwtwebtoken.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '2m' });
};

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401); // Nincs token

    jwtwebtoken.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Érvénytelen token
        req.user = user;
        next();
    });
};

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    try {
        console.log('Executing query...');
        const result = await db.execute(
            'SELECT userid, username, password FROM users WHERE username = ?',
            [username]
        );

        console.log('Query result:', result);
        console.log('Result type:', typeof result);
        console.log('Result is array?', Array.isArray(result));

        // A result egy tömb, az első eleme a rows
        const rows = result[0];
        console.log('Rows:', rows);
        console.log('Rows length:', rows.length);
        console.log('Rows type:', typeof rows);
        console.log('User found:', rows);

        if (rows.length === 0) {
            return res.status(401).json({ message: 'Hibás felhasználónév vagy jelszó' });
        }
        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Hibás felhasználónév vagy jelszó' });
        }

        const token = generateToken(user);

        res.json({
            message: 'Sikeres belépés',
            token
        });
    } catch (error) {
        console.error('Error executing query:', error);
        return res.status(500).json({ message: 'Database error', error: error.message });
    }
});

app.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
        return res.status(400).json({ message: 'Username, password, and email are required.' });
    }
    console.log('Registering user:', username, email, password);
    const hashedPassword = await bcrypt.hash(password, 10); // a salt rounds of 10
    try {
        const [result] = await db.execute("INSERT INTO users (username, password, email) VALUES (?, ?, ?)", [username, hashedPassword, email]);
        console.log('User registered with ID:', result.insertId);
        res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
    } catch (error) {
        res.status(500).json({ message: 'Database error', error: error.message });
    }
    return;
});

app.get('/profile', authenticateToken, (req, res) => {
    res.json({
        message: 'Védett adat',
        user: req.user
    });
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

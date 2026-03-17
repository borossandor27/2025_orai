import express from 'express';
import pool, { atutalas } from './db.js';

const app = express();
app.use(express.json());

app.post('/atutalas', async (req, res) => {
    const { fromAccountId, toAccountId, amount } = req.body;    
    try {
        await atutalas(fromAccountId, toAccountId, amount);
        res.status(200).json({ message: 'Átutalás sikeres.' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


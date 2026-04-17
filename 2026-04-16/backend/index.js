import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
const app = express();
app.use(express.json());
const port = 3000;
app.use(cors());

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'autokocsonzes',
  port: 3306
};

const pool = mysql.createPool(dbConfig);

app.get('/api/cars', async (req, res) => {
  try {
    let sqlcommand = 'SELECT * FROM `auto`';
    const [rows] = await pool.execute(sqlcommand);
    res.status(200).json(rows); 
  } catch (error) {
    console.status(500).error('Error fetching cars:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.post('/api/cars', async (req, res) => {
  try {
    const { marka, rendszam, uzemananyag } = req.body;
    let sqlcommand = 'INSERT INTO `auto` (`rendszam`, `automarka`, `uzemanyag`) VALUES (?, ?, ?)';  
    const [result] = await pool.execute(sqlcommand, [rendszam, marka, uzemananyag]);
    res.status(201).json({ id: result.insertId, marka, rendszam, uzemananyag }); 
  } catch (error) {
    console.error('Error adding car:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
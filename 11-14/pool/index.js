// app.js
const express = require('express');
const pool = require('./db');
const app = express();
const PORT = 3000;

app.use(express.json());

// GET - összes felhasználó lekérdezése
app.get('/users', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM users');
    res.json({
      success: true,
      data: rows,
      count: rows.length
    });
  } catch (error) {
    console.error('Hiba a felhasználók lekérdezésekor:', error);
    res.status(500).json({
      success: false,
      error: 'Adatbázis hiba',
      message: error.message
    });
  }
});

// GET - felhasználó lekérdezése ID alapján
app.get('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const [rows] = await pool.execute(
      'SELECT * FROM users WHERE id = ?',
      [userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'Felhasználó nem található'
      });
    }

    res.json({
      success: true,
      data: rows[0]
    });
  } catch (error) {
    console.error('Hiba a felhasználó lekérdezésekor:', error);
    res.status(500).json({
      success: false,
      error: 'Adatbázis hiba'
    });
  }
});

// POST - új felhasználó létrehozása
app.post('/users', async (req, res) => {
  try {
    const { name, email, age } = req.body;

    // Validáció
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Név és email megadása kötelező'
      });
    }

    const [result] = await pool.execute(
      'INSERT INTO users (name, email, age) VALUES (?, ?, ?)',
      [name, email, age || null]
    );

    res.status(201).json({
      success: true,
      message: 'Felhasználó sikeresen létrehozva',
      data: {
        id: result.insertId,
        name,
        email,
        age
      }
    });
  } catch (error) {
    console.error('Hiba a felhasználó létrehozásakor:', error);
    
    // Duplikált email ellenőrzése
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({
        success: false,
        error: 'Ez az email cím már használatban van'
      });
    }

    res.status(500).json({
      success: false,
      error: 'Adatbázis hiba'
    });
  }
});

// PUT - felhasználó frissítése
app.put('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email, age } = req.body;

    const [result] = await pool.execute(
      'UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?',
      [name, email, age, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        error: 'Felhasználó nem található'
      });
    }

    res.json({
      success: true,
      message: 'Felhasználó sikeresen frissítve',
      affectedRows: result.affectedRows
    });
  } catch (error) {
    console.error('Hiba a felhasználó frissítésekor:', error);
    res.status(500).json({
      success: false,
      error: 'Adatbázis hiba'
    });
  }
});

// DELETE - felhasználó törlése
app.delete('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    const [result] = await pool.execute(
      'DELETE FROM users WHERE id = ?',
      [userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        error: 'Felhasználó nem található'
      });
    }

    res.json({
      success: true,
      message: 'Felhasználó sikeresen törölve',
      affectedRows: result.affectedRows
    });
  } catch (error) {
    console.error('Hiba a felhasználó törlésekor:', error);
    res.status(500).json({
      success: false,
      error: 'Adatbázis hiba'
    });
  }
});

// Tranzakció példa
app.post('/transfer', async (req, res) => {
  let connection;
  try {
    const { fromUserId, toUserId, amount } = req.body;

    connection = await pool.getConnection();
    await connection.beginTransaction();

    // Első felhasználó egyenlegének csökkentése
    const [fromResult] = await connection.execute(
      'UPDATE accounts SET balance = balance - ? WHERE user_id = ? AND balance >= ?',
      [amount, fromUserId, amount]
    );

    if (fromResult.affectedRows === 0) {
      await connection.rollback();
      return res.status(400).json({
        success: false,
        error: 'Nincs elegendő egyenleg vagy felhasználó nem található'
      });
    }

    // Második felhasználó egyenlegének növelése
    const [toResult] = await connection.execute(
      'UPDATE accounts SET balance = balance + ? WHERE user_id = ?',
      [amount, toUserId]
    );

    if (toResult.affectedRows === 0) {
      await connection.rollback();
      return res.status(400).json({
        success: false,
        error: 'Célfelhasználó nem található'
      });
    }

    await connection.commit();
    
    res.json({
      success: true,
      message: 'Átutalás sikeres'
    });

  } catch (error) {
    if (connection) await connection.rollback();
    console.error('Hiba a tranzakcióban:', error);
    res.status(500).json({
      success: false,
      error: 'Tranzakció hiba'
    });
  } finally {
    if (connection) connection.release();
  }
});

// Összetett lekérdezés példa
app.get('/users-with-posts', async (req, res) => {
  try {
    const [rows] = await pool.execute(`
      SELECT 
        u.id, 
        u.name, 
        u.email,
        COUNT(p.id) as post_count
      FROM users u
      LEFT JOIN posts p ON u.id = p.user_id
      GROUP BY u.id
      ORDER BY post_count DESC
    `);

    res.json({
      success: true,
      data: rows
    });
  } catch (error) {
    console.error('Hiba a lekérdezésben:', error);
    res.status(500).json({
      success: false,
      error: 'Adatbázis hiba'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
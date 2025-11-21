import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tranzakcios_pelda',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export const atutalas = async (fromAccountId, toAccountId, amount) => {
    const connection = await pool.getConnection(); //dedikált kapcsolat az átutalás idejére
    try {
        await connection.beginTransaction(); //tranzakció indítása
        const [fromAccount] = await connection.execute('SELECT * FROM `szamlak` WHERE `szamla_id` = ?', [fromAccountId]);
        if (fromAccount.length === 0) {
            throw new Error('A küldő számla nem létezik.');
        }
        if (fromAccount[0].egyenleg < amount) {
            throw new Error('Nincs elegendő fedezet a számlán.');
        }
        const [toAccount] = await connection.execute('SELECT * FROM `szamlak` WHERE `szamla_id` = ?', [toAccountId]);
        if (toAccount.length === 0) {
            throw new Error('A fogadó számla nem létezik.');
        }
        await connection.execute('UPDATE `szamlak` SET `egyenleg` = `egyenleg` - ? WHERE `szamla_id` = ?', [amount, fromAccountId]);
        await connection.execute('UPDATE `szamlak` SET `egyenleg` = `egyenleg` + ? WHERE `szamla_id` = ?', [amount, toAccountId]);
        await connection.commit(); //tranzakció véglegesítése
    } catch (error) {
        await connection.rollback();

        export default pool;
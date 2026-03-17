import express from 'express';

const app = express();

app.get('/nyar', (req, res) => {
    res.send('Nyár van!');
});

app.get('/osz', (req, res) => {
    res.send('Ősz van!');
});

app.get('/tavasz', (req, res) => {
    res.status(201).send('Tavasz van!');
});

app.use((req, res) => {
    res.status(404).send('Az adott útvonal nem található!');
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

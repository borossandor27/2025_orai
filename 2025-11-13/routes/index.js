import express from 'express'; //megadtuk a forráskó helyét
const app = express();

// url-ben: http://localhost:3000/?evszak=tavasz&honap=marcius

app.get('/', (req, res) => {
    let evszak = req.query.evszak;
    let honap = req.query.honap;
    if (evszak === 'tavasz') {
        res.send(`Tavasz van!!! és a hónap neve ${honap}`);
    } else if (evszak === 'nyar') {
        res.send('Nyár van!!!');
    } else if (evszak === 'osz') {
        res.send('Ősz van!!!');
    } else if (evszak === 'tel') {
        res.send('Tél van!!!');
    } else {
        res.send('Nem tudom milyen évszak van!!!');
    }

});
app.get('/masik', (req, res) => {
  res.send('Welcome to the Masik Page');
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
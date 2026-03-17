import express from 'express';
const app = express();

const elsoFuttatando = (req, res, next) => {
  console.log('Első függvény');
  next();
}
const masodikFuttatando = (req, res, next) => {
  console.log('Második függvény');
  next();
}
app.get('/', elsoFuttatando, masodikFuttatando, (req, res) => {
  res.send('Két middleware futott le!');
});
app.listen(3000, () => {
  console.log('Szerver elindult a http://localhost:3000');
});
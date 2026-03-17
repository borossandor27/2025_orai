import express from 'express';
const app = express();

app.get('/:evszak/:honap', (req, res) => {
  let evszak = req.params.evszak;
  let honap = req.params.honap;
  res.send(`Az évszak: ${evszak}, a hónap: ${honap}`);
});

app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});
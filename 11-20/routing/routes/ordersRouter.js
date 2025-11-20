import express from 'express';

const ordersRouter = express.Router();

ordersRouter.get('/', (req, res) => {
    // a teljes útvonal: /orders/
    res.send('Összes rendelés lekérése');
});

ordersRouter.get('/:id', (req, res) => {
    const orderId = req.params.id;
    res.send(`Rendelés lekérése ID alapján: ${orderId}`);
});

ordersRouter.post('/', (req, res) => {
    res.send('Új rendelés létrehozása');
});

ordersRouter.put('/:id', (req, res) => {
    const orderId = req.params.id;
    res.send(`Rendelés frissítése ID alapján: ${orderId}`);
});
export default ordersRouter;
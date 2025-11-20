import express from 'express';
const app = express();

import cors from 'cors';
app.use(cors()); // Kikapcsolja a CORS korlátozásokat

import ordersRouter from './routes/ordersRouter.js';
import productsRouter from './routes/productsRouter.js';
//import customersRouter from './routes/customers.js';

app.use('/orders', ordersRouter); //becsatolja az ordersRouter-t az /orders útvonalra
app.use('/products', productsRouter);
//app.use('/customers', customersRouter);

app.listen(3000, () => {
    console.log('Szerver elindult a http://localhost:3000 címen');
});
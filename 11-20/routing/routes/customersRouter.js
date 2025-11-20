import express from 'express';
const customersRouter = express.Router();

customersRouter.get('/', (req, res) => {
    // a teljes útvonal: http://localhost:3000/customers/
    res.send('Összes ügyfél lekérése');
});

export default customersRouter;
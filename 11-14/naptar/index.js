import express from 'express';
import fs from 'fs'; // fájlok manipulálásához
import path from 'path'; // útvonalkezeléshez
import { fileURLToPath } from 'url'; // __dirname helyettesítésére ES modulokban
import 'dotenv/config'; // környezeti változók kezeléséhez   

const app = express();
const PORT = process.env.PORT || 3000;

// __dirname helyettesítése ES modulokban
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/:hetnapja', (req, res) => {
    const hetnapja = req.params.hetnapja.toLowerCase();
    const filePath = path.join(__dirname,'public', `${hetnapja}.html`);
    console.log(`Kérés érkezett a következő napra: ${filePath}`);
    try {
        if (fs.existsSync(filePath)) {
            res.status(201).sendFile(filePath);
        } else {
            res.status(404).send('<h1>404 - Nincs ilyen nap!</h1>');
        }
    } catch (err) {
        res.status(500).send('<h1>500 - Szerver hiba!</h1>');
    }
});

app.listen(PORT, () => {
    console.log(`Szerver fut a http://localhost:${PORT} címen`);
});
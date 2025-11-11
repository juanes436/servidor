import express from "express"
import cors from "cors";

const app=express();
app.use(cors());
app.get('/', (req, res) => {
    res.send('nuestro servidor funciona 😁');
});

app.listen(3000, () => {
    console.log('Servidor Corriendo en http://localhost:3000');
});


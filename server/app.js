// Importando modulos a usar
const express = require('express');
const cors = require('cors');
// const session = require('express-session');

require('dotenv').config();

const app = express();
const PORT = 4090;

// Gestionando middlewares
app.use(express.json());
app.use(cors());

// Importando modelos:

require('./PedidosYa.Data/models/User/user');

// Importando rutas:

// creando los endpoints:

app.listen(PORT,() => {
    console.log(`Server listen on port http://localhost:${PORT}`)
});
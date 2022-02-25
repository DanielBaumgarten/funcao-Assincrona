const express = require('express');
const rotas = require('./rotas');
const app = express();

app.use(express.json());
app.use(rotas);

const porta = 8000;
app.listen(porta);
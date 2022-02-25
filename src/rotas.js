const express = require('express');
const {getCityFromZipcode, getPackageDescriptionNpm} = require('utils-playground');
const { cidades, nomePacote } = require('./script');


const rotas = express();

rotas.get('/cidade', cidades)
rotas.get('/pacote/:nomePacote', nomePacote,)

module.exports = rotas;
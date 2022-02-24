const express = require('express');
const {getCityFromZipcode, getPackageDescriptionNpm} = require('utils-playground');
//let cidades = require('.')
const app = express();

const cidades = async (req,res) => {
  
    const cidade =  getCityFromZipcode('90150002');
    const cidade2 =  getCityFromZipcode('41256250');

    const promise = await Promise.all ([cidade, cidade2]);

    const [resposta, resposta2] = promise;

    return res.send(`a cidade encontrado foi: ${resposta} e ${resposta2}.`)
  
};

const nomePacote = async (req,res) => {
    const { nomePacote } = req.params;

    const descricaoPacote = await getPackageDescriptionNpm(nomePacote);

    return res.send(descricaoPacote);
};


app.listen(3000);

module.exports = {
    cidades,
    nomePacote
}


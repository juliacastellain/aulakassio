const express = require('express');

const routes = express.Router();
const connection = require('./database/connection');

routes.post("/series/", async (request, response) => {

    // receber os parametros da requisição
    const {ID, NOMESERIE, GENERO, TEMPORADAS} = request.body;

//  const parametros = request.body;
//   console.log(parametros);

    // inserir os dados no banco de dados
    await connection('series').insert(
    {
        ID,
        NOMESERIE,
        GENERO,
        TEMPORADAS
    }
    )
    return response.send(
            // "nome": "Julia",
            // "sobrenome": "Castellain",
            // "altura": "1,62",
            // "cidade": "Blumenau"

            'Serie ' + ID + ' foi inserida com sucesso!');
});

routes.get('/series/', async (request, response) => {
    const listaserie = await connnection('series').select('*');
    
    return response.json(listaserie);
});

module.exports = routes;
const { Router } = require('express');
const routes = Router();

//ROTAS DO TIME
const timeCreate = require('./controller/Create/Time');
const timelist = require('./controller/List/Time');
const timeUpdate = require('./controller/Update/Time');
const timeDelete = require('./controller/Delete/Time');

//Criar um time
routes.post('/time', timeCreate.create);
//listar um time
routes.get('/time/list', timelist.index);
//listar time por id
routes.get('/time/list/:id', timelist.indexforId);
//Listar jogadores titulares do time;
routes.get('/time/list/titulares/:id', timelist.indexTitulares);
//Listar jogadores reservas do time;
routes.get('/time/list/reservas/:id', timelist.indexReservas);
//deletar time
routes.delete('/time/delete/:id', timeDelete.delete);
//utualizar time
routes.put('/time/update/:id', timeUpdate.update);

//ROUTES JOGADORES

const jogadorCreate = require('./controller/Create/Jogador');
const jogadorList = require('./controller/List/Jogador');
const jogadorDelete = require('./controller/Delete/Jogador');
const jogadorUpdate = require('./controller/Update/Jogador');

//criar jogador
routes.post('/jogador/create', jogadorCreate.create);
//Listar todos os jogadores
routes.get('/jogador/list', jogadorList.index);
//Listar um jogador especifico com time
routes.get('/jogador/list/:id', jogadorList.indexForId);
//atualizar jogador, mudar posição
routes.put('/jogador/update/position/:id', jogadorUpdate.updatePosition);
//atualizar jogador, colocar no banco
routes.put('/jogador/update/titular/:id', jogadorUpdate.updateTitular);
//deletar um jogador
routes.delete('/jogador/delete/:id', jogadorDelete.delete);

module.exports = routes;

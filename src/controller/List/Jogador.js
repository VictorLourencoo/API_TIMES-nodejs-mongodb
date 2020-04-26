const Jogadores = require('../../models/JogadoresSchema');
const Time = require('../../models/TimeSchema');

module.exports = {
  //listar todos os jogadores
  async index(request, response) {
    try {
      const jogador = await Jogadores.find();

      return response.json(jogador);
    } catch (error) {
      console.log(error);
      return response.send({ error: 'erro ao listar jogadores' });
    }
  },
  //listar um jogador especifico em seu time
  async indexForId(request, response) {
    try {
      const id = request.params.id;

      const jogador = await Jogadores.findById(id);
      console.log(jogador.time);
      const time = await Time.findById(jogador.time);

      return response.send({ time, jogador });
    } catch (error) {
      console.log(error);
      return response.send({ error: 'error list jogadores' });
    }
  },
};

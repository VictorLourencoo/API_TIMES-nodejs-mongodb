const Jogadores = require('../../models/JogadoresSchema');
const Time = require('../../models/TimeSchema');

module.exports = {
  async create(request, response) {
    try {
      const { name, position, time, titular } = request.body;

      const check = await Time.findById(time);
      if (!check) {
        return response.status(400).send({ error: 'O Time não existe' });
      }

      const jogadores = await Jogadores.create({
        name,
        position,
        time,
        titular,
      });

      return response.json(jogadores);
    } catch (error) {
      console.log(error);
      return response.status(400).send({ error: 'Erro ao criar Jogador' });
    }
  },
};

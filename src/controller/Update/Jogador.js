const Jogadores = require('../../models/JogadoresSchema');

module.exports = {
  async updatePosition(request, response) {
    try {
      const id = request.params.id;
      const { position } = request.body;

      const jogador = await Jogadores.findByIdAndUpdate(
        id,
        { $set: position },
        {
          new: true,
        }
      );

      return response.json(jogador);
    } catch (error) {
      return response.status(400).send({ error: 'error update ' });
    }
  },
  async updateTitular(request, response) {
    try {
      const id = request.params.id;
      const { titular } = request.body;

      const jogador = await Jogadores.findByIdAndUpdate(
        id,
        { $set: titular },
        {
          new: true,
        }
      );

      return response.json(jogador);
    } catch (error) {
      return response.status(400).send({ error: 'error update ' });
    }
  },
};

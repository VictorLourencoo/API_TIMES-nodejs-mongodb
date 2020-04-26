const Jogadores = require('../../models/JogadoresSchema');
const Time = require('../../models/TimeSchema');

module.exports = {
  async delete(request, response) {
    try {
      const id = request.params.id;

      await Jogadores.findByIdAndRemove(id);

      return response.json();
    } catch (error) {
      return response.status(400).send({ error: 'Erro ao deletar time' });
    }
  },
};

const Jogadores = require('../../models/JogadoresSchema');
const Time = require('../../models/TimeSchema');

module.exports = {
  async update(request, response) {
    try {
      //enviando parametro id, no cabeçalho
      // const { id } = request.headers.ID;
      //enviando parametros pela URL
      const id = request.params.id;
      const { name } = request.body;

      const time = await Time.findOneAndUpdate(
        id,
        { $set: name },
        { new: true, upsert: true }
      );
      return response.json(time);
    } catch (error) {
      console.log(error);
      return response.status(400).send({ error: 'error update new time' });
    }
  },
};

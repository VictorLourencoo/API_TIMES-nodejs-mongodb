const Jogadores = require('../../models/JogadoresSchema');
const Time = require('../../models/TimeSchema');

module.exports = {
  async delete(request, response) {
    try {
      const id = request.params.id;

      const time = await Time.findById(id);
      //this.aux = time._id;
      await Time.remove(time);

      //const jogadores = await Jogadores.find({ time: { $eq: aux } });
      //await Jogadores.removeAllListeners(jogadores);
      console.log();
      return response.json();
    } catch (error) {
      console.log(error);
      return response.status(400).send({ error: 'error delete id' });
    }
  },
};

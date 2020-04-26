const Jogadores = require('../../models/JogadoresSchema');
const Time = require('../../models/TimeSchema');

module.exports = {
  async index(request, response) {
    try {
      const time = await Time.find();
      return response.json(time);
    } catch (error) {
      return response.status(400).send({ error: 'error list times' });
    }
  },
  //Listar um time especifico

  //Listar time com todos os seus jogadores
  async indexforId(request, response) {
    try {
      //enviando parametro id, no cabeçalho
      // const { id } = request.headers.ID;
      //enviando parametros pela URL
      const { id } = request.params;

      const time = await Time.findById(id);

      const jogadores = await Jogadores.find({ time: { $eq: time._id } });

      return response.json({ time, jogadores });
    } catch (error) {
      return response.status(400).send({ error: 'error id' });
    }
  },

  async indexTitulares(request, response) {
    try {
      const id = request.params.id;

      const time = await Time.findById(id);
      //const jogadores = await Jogadores.find({ time: { $eq: time._id } });

      const titulares = await Jogadores.find({
        $and: [{ time: { $eq: time._id } }, { titular: { $eq: true } }],
      });

      return response.json({ time, titulares });
    } catch (error) {
      console.log(error);
      return response.status(400).send({ error: 'error id' });
    }
  },
  async indexReservas(request, response) {
    try {
      const id = request.params.id;

      const time = await Time.findById(id);
      //const jogadores = await Jogadores.find({ time: { $eq: time._id } });

      const titulares = await Jogadores.find({
        $and: [{ time: { $eq: time._id } }, { titular: { $eq: false } }],
      });

      return response.json({ time, titulares });
    } catch (error) {
      console.log(error);
      return response.status(400).send({ error: 'error id' });
    }
  },
};

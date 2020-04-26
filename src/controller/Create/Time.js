const Jogadores = require('../../models/JogadoresSchema');
const Time = require('../../models/TimeSchema');

module.exports = {
  async create(request, response) {
    try {
      const { name } = request.body;
      const time = await Time.create({ name });

      return response.json(time);
    } catch (error) {
      console.log(error);
      return response.status(400).send({ error: 'Erro ao criar time' });
    }
  },
};

/**Percorrer cada um dos jogadores e atribuir ao time */

//Relacionamento por referenciamento:

//nesse caso. criaria os jogadores no json, e seriam referenciados no time.
//aguarde todas as promisses retornadas, para continuar
/* await Promise.all(
        jogadores.map(async (jogador) => {
          const jogadoresTime = new Jogadores({
            ...jogador,
            time: time._id,
          });

          await jogadoresTime.save();

          time.jogadores.push(jogadoresTime);
        })
      );
      await time.save();
*/

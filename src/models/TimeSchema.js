const mongoose = require('mongoose');

const TimeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  /*
  Nesse caso causo, teria que passar os jogadores dentro do time.
  jogadores: [
    {
      //Um time tem varios jogadores da tabela jogadores.
      type: mongoose.Schema.Types.ObjectId,
      ref: 'jogadores',
      require: true,
    },
  ],
  */
});

const time = mongoose.model('Time', TimeSchema);

module.exports = time;

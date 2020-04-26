const mongoose = require('mongoose');

const JogadoresSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  position: {
    type: String,
    require: true,
  },

  time: {
    //todo jogador pertence a um determinado time.
    type: mongoose.Schema.Types.ObjectId,
    ref: 'time',
    require: true,
  },
  titular: {
    type: Boolean,
    require: true,
  },
});

const jogadores = mongoose.model('jogadores', JogadoresSchema);

module.exports = jogadores;

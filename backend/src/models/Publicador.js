const mongoose = require('mongoose');

const PublicadorSchema = new mongoose.Schema({
    nome: String,
    telefone: String,
    privilegio: {
        type: String, 
        enum: ['anciao', 'servo', 'publicador'],
        default: 'publicador'
    },
    leitor: Boolean,
    ativo: Boolean,
    dataUltimaParte: Date,
    ultimaParte: Date,
    ultimaPresidencia: Date,
    ultimaOraçãoInicial: Date,
    ultimoTesouros: Date,
    ultimoJoias: Date,
    ultimaPresidenciaSalaB: Date,
    ultimoNossaVidaEMinistério: Date,
    utimoEstudoBiblico: Date,
    ultimaLeituraEB: Date,
    ultimaOracaoFinal: Date
});

module.exports = mongoose.model('Publicador', PublicadorSchema);

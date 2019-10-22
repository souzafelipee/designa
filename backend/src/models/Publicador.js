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
    ultimaParte: Date,
    ultimaPresidencia: Date,
    ultimaOracaoInicial: Date,
    ultimoTesouros: Date,
    ultimoJoias: Date,
    ultimaPresidenciaSalaB: Date,
    ultimoNossaVidaEMinisterio: Date,
    ultimoEstudoBiblico: Date,
    ultimaLeituraEB: Date,
    ultimaOracaoFinal: Date
});

module.exports = mongoose.model('Publicador', PublicadorSchema);

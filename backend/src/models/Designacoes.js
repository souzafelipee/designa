const mongoose = require('mongoose');

const DesignacoesSchema = new mongoose.Schema({
    semana: String,
    presidente: String,
    oracaoInicial: String,
    tesouros: String,
    joias: String,
    salaB: String,
    vidaCrista1: String,
    vidaCrista2: String,
    vidaCrista3: String,
    estudoBiblico: String,
    leitor: String,
    oracaoFinal: String,
});

module.exports = mongoose.model('Designacoes', DesignacoesSchema);

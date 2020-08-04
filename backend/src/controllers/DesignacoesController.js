const Designacoes = require ('../models/Designacoes');

module.exports = {
    async store(req,res){
        const designacoes = await Designacoes.create(req.body);
        return res.json(designacoes);
    },
    async update(req,res){
        console.log('BackEnd: to tentando')
        const designacoes = await Designacoes.findByIdAndUpdate(req.params.id,req.body);
        return res.json(designacoes);
    },
    async index(req, res){
        const designacoes = await Designacoes.find({}).sort('nome');

        return res.json(designacoes);
    }
}
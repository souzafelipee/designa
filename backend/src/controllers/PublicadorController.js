const Publicador = require ('../models/Publicador');

module.exports = {
    async index(req, res){
        const publicadores = await Publicador.find({}).sort('nome');

        return res.json(publicadores);
    },
    async searchByName(req, res){
        console.log('Parametro: '+req.params.nome);
        const publicadores = await Publicador.find({nome: new RegExp(req.params.nome, "i")}).sort('nome');
        return res.json(publicadores);
    },
    async searchById(req, res){
        console.log('Parametro: '+req.params.id);
        const publicadores = await Publicador.findById(req.params.id);
        return res.json(publicadores);
    },
    async store(req,res){
        const publicador = await Publicador.create(req.body);
        return res.json(publicador);
    },
    async update(req,res){
        console.log('BackEnd: to tentando')
        const publicador = await Publicador.findByIdAndUpdate(req.params.id,req.body);
        return res.json(publicador);
    }
};
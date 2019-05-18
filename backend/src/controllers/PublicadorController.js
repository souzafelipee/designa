const Publicador = require ('../models/Publicador');

module.exports = {
    async index(req, res){
        const publicadores = await Publicador.find({}).sort('nome');

        return res.json(publicadores);
    },
    async store(req,res){
        const publicador = await Publicador.create(req.body);

        return res.json(publicador);

    }
};
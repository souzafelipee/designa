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
    },
    async designacaoPubl(req, res){
        const publicadores = await Publicador.find({privilegio: [req.params.filtro1]}).sort('-ultimaParte');

        return res.json(publicadores);
    },
    async designacaoPubl2(req, res){
        const publicadores = await Publicador.find({privilegio: [req.params.filtro1,req.params.filtro2]}).sort('-ultimaParte');

        return res.json(publicadores);
    },
    async designacaoPubl3(req, res){
        const publicadores = await Publicador.find().sort('-ultimaParte');

        return res.json(publicadores);
    },
    async ultimaDesignacao(req, res){
        const publicadores = await Publicador.findOne({privilegio: [req.params.filtro1]}).sort('-ultimaParte');

        return res.json(publicadores);
    },
    async ultimaDesignacao2(req, res){
        const publicadores = await Publicador.findOne({privilegio: [req.params.filtro1,req.params.filtro2]}).sort('-ultimaParte');

        return res.json(publicadores);
    },
    async ultimaDesignacao3(req, res){
        const publicadores = await Publicador.findOne().sort('-ultimaParte');

        return res.json(publicadores);
    },
    async ultimaParte(req, res){
        var publicadores;
        if (req.params.parte ==='Presidente') {
            publicadores= await Publicador.findOne({privilegio: [req.params.filtro1]}).sort('-ultimaPresidencia');
        }    

        return res.json(publicadores);
    },
    async ultimaParte2(req, res){
        var publicadores;
        if (req.params.parte ==='Presidente') {
            publicadores= await Publicador.findOne({privilegio: [req.params.filtro1,req.params.filtro2]}).sort('-ultimaPresidencia');
        }    

        return res.json(publicadores);
    },
    async ultimaParte3(req, res){
        var publicadores;
        if (req.params.parte ==='Presidente') {
            publicadores= await Publicador.findOne().sort('-ultimaPresidencia');
        }    

        return res.json(publicadores);
    }
};
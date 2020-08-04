const express = require("express");
const routes = express.Router();
const PublicadorController = require('./controllers/PublicadorController');
const DesignacaoesController = require('./controllers/DesignacoesController');

routes.get("/publicadores", PublicadorController.index);
routes.get("/publicadores/:nome", PublicadorController.searchByName);
routes.get("/publicadores/id/:id", PublicadorController.searchById);
routes.put("/publicadores/id/:id", PublicadorController.update);
routes.post("/publicadores", PublicadorController.store);
routes.get("/ultimaParte/:parte", PublicadorController.ultimaParte3);
routes.get("/ultimaParte/:parte/:filtro1", PublicadorController.ultimaParte);
routes.get("/ultimaParte/:parte/:filtro1/:filtro2", PublicadorController.ultimaParte2);
routes.get("/ultimaDesignacao", PublicadorController.ultimaDesignacao3);
routes.get("/ultimaDesignacao/:filtro1", PublicadorController.ultimaDesignacao);
routes.get("/ultimaDesignacao/:filtro1/:filtro2", PublicadorController.ultimaDesignacao2);
routes.get("/designacaoPubl", PublicadorController.designacaoPubl3);
routes.get("/designacaoPubl/:filtro1", PublicadorController.designacaoPubl);
routes.get("/designacaoPubl/:filtro1/:filtro2", PublicadorController.designacaoPubl2);

routes.get("/designacoes", DesignacaoesController.index);
routes.post("/designacoes", DesignacaoesController.store);

module.exports = routes;
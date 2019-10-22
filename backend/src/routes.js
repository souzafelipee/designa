const express = require("express");
const routes = express.Router();
const PublicadorController = require('./controllers/PublicadorController');

routes.get("/publicadores", PublicadorController.index);
routes.get("/publicadores/:nome", PublicadorController.searchByName);
routes.get("/publicadores/id/:id", PublicadorController.searchById);
routes.put("/publicadores/id/:id", PublicadorController.update);
routes.post("/publicadores", PublicadorController.store);

module.exports = routes;
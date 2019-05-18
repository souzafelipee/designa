const express = require("express");
const routes = express.Router();
const PublicadorController = require('./controllers/PublicadorController');

routes.get("/publicadores", PublicadorController.index);
routes.post("/publicadores", PublicadorController.store);

module.exports = routes;
const express = require('express');
const OngController = require('./Controllers/OngController');
const IncidenteController = require('./Controllers/IncidenteController');
const PerfilController = require('./Controllers/PerfilController');
const SessionController = require('./Controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidente', IncidenteController.index);
routes.post('/incidente', IncidenteController.create);
routes.delete('/incidente/:id', IncidenteController.delete);

routes.get('/perfil', PerfilController.index);

module.exports = routes;
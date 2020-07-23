const express = require('express');
const OngController = require('./Controllers/OngController');
const IncidenteController = require('./Controllers/IncidenteController');
const PerfilController = require('./Controllers/PerfilController');
const SessionController = require('./Controllers/SessionController');

const { celebrate, Segments, Joi } = require('celebrate');

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index);

routes.post('/ongs',celebrate({
    [Segments.BODY]: Joi.object(). keys({
        Nome: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        cidade: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create);

routes.get('/incidente', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidenteController.index);

routes.post('/incidente', IncidenteController.create);

routes.delete('/incidente/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidenteController.delete);

routes.get('/perfil',celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
}), PerfilController.index);

module.exports = routes;
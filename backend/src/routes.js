const express = require('express')
const OngController = require('./controllers/OngsControllers')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileControllers = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileControllers.index)

routes.get('/incidents', IncidentsController.index)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id', IncidentsController.delete)

module.exports = routes
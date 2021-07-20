const Router = require('express').Router()
const controller = require('../controllers/device')


Router.route('/health').get(controller.checkHealth)

Router.route('/').get(controller.getDevices)

Router.route('/:id').get(controller.getDevice)

Router.route('/').post(controller.addDevice)

Router.route('/:id').put(controller.updateDevice)

Router.route('/:id').delete(controller.deleteDevice)

module.exports = Router
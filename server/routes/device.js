const Router = require('express').Router()
const controller = require('../controllers/device')

Router.route('/').get(controller.getDevice)

Router.route('/').post(controller.addDevice)

Router.route('/:id').delete(controller.deleteDevice)

module.exports = Router
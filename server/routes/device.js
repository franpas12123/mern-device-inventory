const Router = require('express').Router()
const controller = require('../controllers/device')


Router.route('/health').get(controller.checkHealth)

Router.route('/').get(controller.getDevice)

Router.route('/').post(controller.addDevice)

module.exports = Router
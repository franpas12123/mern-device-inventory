let Device = require('../models/device.model')

function getDevice(req, res) {
    Device.find()
        .then(device => res.json(device))
        .catch(err => res.status(400).json(`Error: ${err}`))
}

function deleteDevice(req, res) {
    Device.findByIdAndDelete(req.params.id)
        .then(device => res.json(device))
        .catch(err => res.status(400).json(`Error: ${err}`))
}

function addDevice(req, res) {
    const { name, field, description, images } = req.body

    const availability = Date.parse(req.body.availability)

    const newDevice = new Device({ name, field, description, images, availability })

    newDevice.save()
        .then(() => res.json('Device is added!'))
        .catch(err => res.status(400).json(`Error: ${err}`))
}

function checkHealth(req, res) {
    res.json({ health: 'healthy' })
}

module.exports = {
    getDevice,
    addDevice,
    checkHealth,
    deleteDevice
}
let Device = require('../models/device.model')

function getDevices(req, res) {
    Device.find()
        .then(device => res.json(device))
        .catch(err => res.status(400).json(`Error: ${err}`))
}

function getDevice(req, res) {
    Device.findById(req.params.id)
        .then(device => res.json(device))
        .catch(err => res.status(400).json(`Error: ${err}`))
}

function updateDevice(req, res) {
    Device.findById(req.params.id)
        .then(device => {
            const { name, field, description, availability } = req.body

        device.name = name
        device.field = field
        device.description = description
        device.date = Date.parse(availability)

        device.save()
            .then(() => res.json('Device updated!'))
            .catch(err => res.status(400).json(`Error: ${err}`))
        })
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
    getDevices,
    getDevice,
    addDevice,
    updateDevice,
    checkHealth,
    deleteDevice
}
const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Name, Field, Description, Images, Availability
const deviceSchema = new Schema({
    name: { type: String, required: true },
    field: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: String, required: false },
    availability: { type: Date, required: true }
}, { timestamps: true })

const Device = mongoose.model('Device', deviceSchema)

module.exports = Device
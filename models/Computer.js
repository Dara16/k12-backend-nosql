const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ComputerSchema = new Schema({
    deviceName: {
        type: String,
        required: true,
    },
    deviceModel: {
        type: String,
        required: true
    },
    operatingSystem: {
        type: String,
        required: true
    },
    ram: {
        type: Number,
        required: true
    },
    storageSize: {
        type: Number,
        required: true
    },
    userGuides: {
        type: String
    },
    defaultUsername: {
        type: String
    },
    defaultPassword: {
        type: String
    }
})

module.exports = mongoose.model('Computer', ComputerSchema)
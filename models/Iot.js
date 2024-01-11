const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IotSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    deviceName: {
        type: String,
        required: true,
    },
    deviceModel: {
        type: String,
        required: true
    },
    connectivity: {
        type: String,
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
},{
    timestamps: true 
})

module.exports = mongoose.model('Iot', IotSchema)
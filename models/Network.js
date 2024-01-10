const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NetworkSchema = new Schema({
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
    deviceType: {
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

module.exports = mongoose.model('Network', NetworkSchema)
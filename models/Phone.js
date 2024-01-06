const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PhoneSchema = new Schema({
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
    operatingSystem: {
        type: String,
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
},{
    timestamps: true 
})

module.exports = mongoose.model('Phone', PhoneSchema)
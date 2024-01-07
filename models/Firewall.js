const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FirewallSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    firewallType: {
        type: String,
        required: true
    },
    deviceName: {
        type: String,
        required: true,
    },
    deviceModel: {
        type: String,
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

module.exports = mongoose.model('Firewall', FirewallSchema)
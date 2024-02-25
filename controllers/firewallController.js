const Firewall = require('../models/Firewall')

const getFirewalls = async (req, res, next) => {
    try {
        const firewalls = await Firewall.find()
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(firewalls)
    } catch (err) {
        next(err)
    }

}

const postFirewall = async (req, res, next) => {
    try {
        const firewall = await Firewall.create(req.body)
              
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({ device: firewall, message: `Device with name: ${firewall.deviceName} added. We will respond to the email associated with your account within 3 business days`})
    } catch (err) {
        next(err)
    }

}

const getFirewall = async (req, res, next) => {
    try {
        const firewall = await Firewall.findById(req.params.firewallId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(firewall)

    } catch (err) {
        next(err)
    }
}

module.exports = {
    getFirewalls,
    postFirewall,
    getFirewall
}
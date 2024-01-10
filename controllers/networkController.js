const Network = require('../models/Network')

const getNetworks = async (req, res, next) => {
    try {
        const networks = await Network.find()
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(networks)
    } catch (err) {
        next(err)
    }

}

const postNetwork = async (req, res, next) => {
    try {
        const network = await Network.create(req.body)
              
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({ message: `Device with name: ${network.deviceName} added. We will respond to the email associated with your account within 3 business days`})
    } catch (err) {
        next(err)
    }

}

const getNetwork = async (req, res, next) => {
    try {
        const network = await Network.findById(req.params.networkId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(network)

    } catch (err) {
        next(err)
    }
}

module.exports = {
    getNetworks,
    postNetwork,
    getNetwork
}
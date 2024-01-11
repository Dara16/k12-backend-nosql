const Iot = require('../models/Iot')

const getIots = async (req, res, next) => {
    try {
        const iots = await Iot.find()
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(iots)
    } catch (err) {
        next(err)
    }

}

const postIot = async (req, res, next) => {
    try {
        const iot = await Iot.create(req.body)
              
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({ message: `Device with name: ${iot.deviceName} added. We will respond to the email associated with your account within 3 business days`})
    } catch (err) {
        next(err)
    }

}

const getIot = async (req, res, next) => {
    try {
        const iot = await Iot.findById(req.params.iotId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(iot)

    } catch (err) {
        next(err)
    }
}

module.exports = {
    getIots,
    postIot,
    getIot
}
const Hardserver = require('../models/Hardserver')

const getHardservers = async (req, res, next) => {
    try {
        const hardserver = await Hardserver.find()
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(hardserver)
    } catch (err) {
        next(err)
    }

}

const postHardserver = async (req, res, next) => {
    try {
        const hardserver = await Hardserver.create(req.body)
              
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({ message: `Device with name: ${hardserver.deviceName} added. We will respond to the email associated with your account within 3 business days`})
    } catch (err) {
        next(err)
    }

}

const getHardserver = async (req, res, next) => {
    try {
        const hardserver = await Hardserver.findById(req.params.id)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(hardserver)

    } catch (err) {
        next(err)
    }
}

module.exports = {
    getHardservers,
    postHardserver,
    getHardserver
}
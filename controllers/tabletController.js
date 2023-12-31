const Tablet = require('../models/Tablet')

const getTablets = async (req, res, next) => {
    try {
        const tablets = await Tablet.find()
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(tablets)
    } catch (err) {
        next(err)
    }

}

const postTablet = async (req, res, next) => {
    try {
        const tablet = await Tablet.create(req.body)
              
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({ message: `Device with name: ${tablet.deviceName} added. We will respond to the email associated with your account within 3 business days`})
    } catch (err) {
        next(err)
    }

}

const getTablet = async (req, res, next) => {
    try {
        const tablet = await Tablet.findById(req.params.tabletId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(tablet)

    } catch (err) {
        next(err)
    }
}

module.exports = {
    getTablets,
    postTablet,
    getTablet
}
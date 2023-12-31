const Workstation = require('../models/Workstation')

const getWorkstations = async (req, res, next) => {
    try {
        const workstations = await Workstation.find()
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(workstations)
    } catch (err) {
        next(err)
    }

}

const postWorkstation = async (req, res, next) => {
    try {
        const workstation = await Workstation.create(req.body)
              
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({ message: `Device with name: ${workstation.deviceName} added. We will respond to the email associated with your account within 3 business days`})
    } catch (err) {
        next(err)
    }

}

const getWorkstation = async (req, res, next) => {
    try {
        const workstation = await Workstation.findById(req.params.workstationId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(workstation)

    } catch (err) {
        next(err)
    }
}

module.exports = {
    getWorkstations,
    postWorkstation,
    getWorkstation
}
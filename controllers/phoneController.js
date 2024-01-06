const Phone = require('../models/Phone')

const getPhones = async (req, res, next) => {
    try {
        const phones = await Phone.find()
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(phones)
    } catch (err) {
        next(err)
    }

}

const postPhone = async (req, res, next) => {
    try {
        const phone = await Phone.create(req.body)
              
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({ message: `Device with name: ${phone.deviceName} added. We will respond to the email associated with your account within 3 business days`})
    } catch (err) {
        next(err)
    }

}

const getPhone = async (req, res, next) => {
    try {
        const phone = await Phone.findById(req.params.phoneId)

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(phone)

    } catch (err) {
        next(err)
    }
}

module.exports = {
    getPhones,
    postPhone,
    getPhone
}
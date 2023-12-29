const Computer = require('../models/Computer')

const getComputers = async (req, res, next) => {
    try {
        const computers = await Computer.find()
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(computers)
    } catch (err) {
        next(err)
    }

}

const postComputer = async (req, res, next) => {
    try {
        const computer = await Computer.create(req.body)
              
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(computer)
    } catch (err) {
        next(err)
    }

}

module.exports = {
    getComputers,
    postComputer
}
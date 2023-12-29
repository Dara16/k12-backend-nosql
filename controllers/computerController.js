

const getComputers = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Show me all the computers' })
}

const postComputer = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Creating computer with name of: ${req.body.deviceName}` })
}

module.exports = {
    getComputers,
    postComputer
}
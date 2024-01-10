const express = require('express');
const router = express.Router();

const { 
    getNetworks, 
    postNetwork,
    getNetwork
} = require('../controllers/networkController')

router.route('/')
    .get(getNetworks)
    .post(postNetwork)

router.route('/:networkId')
    .get(getNetwork)

module.exports = router;
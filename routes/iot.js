const express = require('express');
const router = express.Router();

const { 
    getIots, 
    postIot,
    getIot
} = require('../controllers/iotController')

router.route('/')
    .get(getIots)
    .post(postIot)

router.route('/:iotId')
    .get(getIot)

module.exports = router;
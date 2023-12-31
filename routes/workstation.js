const express = require('express');
const router = express.Router();

const { 
    getWorkstations, 
    postWorkstation,
    getWorkstation
} = require('../controllers/WorkstationController')

router.route('/')
    .get(getWorkstations)
    .post(postWorkstation)

router.route('/:workstationId')
    .get(getWorkstation)

module.exports = router;
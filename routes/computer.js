const express = require('express');
const router = express.Router();

const { 
    getComputers, 
    postComputer,
    getComputer
} = require('../controllers/computerController')

router.route('/')
    .get(getComputers)
    .post(postComputer)

router.route('/:computerId')
    .get(getComputer)

module.exports = router;
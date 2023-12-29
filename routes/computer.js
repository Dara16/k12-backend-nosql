const express = require('express');
const router = express.Router();

const { 
    getComputers, 
    postComputer
} = require('../controllers/computerController')

router.route('/')
    .get(getComputers)
    .post(postComputer)

module.exports = router;
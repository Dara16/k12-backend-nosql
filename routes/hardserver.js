const express = require('express');
const router = express.Router();

const { 
    getHardservers, 
    postHardserver,
    getHardserver
} = require('../controllers/hardserverController')

router.route('/')
    .get(getHardservers)
    .post(postHardserver)

router.route('/:id')
    .get(getHardserver)

module.exports = router;
const express = require('express');
const router = express.Router();

const { 
    getTablets, 
    postTablet,
    getTablet
} = require('../controllers/tabletController')

router.route('/')
    .get(getTablets)
    .post(postTablet)

router.route('/:tabletId')
    .get(getTablet)

module.exports = router;
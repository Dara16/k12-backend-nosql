const express = require('express');
const router = express.Router();

const { 
    getPhones, 
    postPhone,
    getPhone
} = require('../controllers/phoneController')

router.route('/')
    .get(getPhones)
    .post(postPhone)

router.route('/:phoneId')
    .get(getPhone)

module.exports = router;
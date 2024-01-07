const express = require('express');
const router = express.Router();

const { 
    getFirewalls, 
    postFirewall,
    getFirewall
} = require('../controllers/firewallController')

router.route('/')
    .get(getFirewalls)
    .post(postFirewall)

router.route('/:firewallId')
    .get(getFirewall)

module.exports = router;
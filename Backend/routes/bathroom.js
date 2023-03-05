const express = require('express');
//const Bathroom = require('../models/bathroom');
const router = express.Router();

router.get('/', async (req, res) => {
    return res.status(200).send('hellloooo')
})

module.exports = router;
const express = require('express');
const router = express.Router();

const Bathroom = require('../models/bathroom');

router.post('/new-entry', async(req, res) => {
    const newBathroom = await Bathroom.createBathroom(req.body);
    return res.status(201).json(newBathroom);
})

router.get('/', async (req, res) => {
    return res.status(200).send('hellloooo');
})

router.get('/near-me', async (req, res, next) => {
    const locations = await Bathroom.getBathrooms(req.params);
    return res.status(200).json(locations);
})

module.exports = router;
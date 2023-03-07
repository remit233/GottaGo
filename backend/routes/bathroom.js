const express = require('express');
const router = express.Router();

const Bathroom = require('../models/bathroom');

router.post('/create', async(req, res) => {
    const newBathroom = await Bathroom.createBathroom(req.body);
    return res.status(201).json(newBathroom);
})

router.get('/read', async (req, res) => {
    const bathroomInfo = await Bathroom.readBathroom(req.params);
    return res.status(200).json(bathroomInfo);
})

router.put('/update', async (req, res) => {
    const updatedBathroom = await Bathroom.updateBathroom(req.params);
    return res.status(200).json(updatedBathroom);
})

router.delete('/delete', async (req, res) => {
    const deletedBathroom = await Bathroom.deleteBathroom(req.params);
    return res.status(200).json({"Bathroom Entry":"Deleted"})
})

module.exports = router;
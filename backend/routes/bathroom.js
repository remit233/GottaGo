const express = require('express');
const router = express.Router();

const Bathroom = require('../models/bathroom');

router.post('/create', async(req, res) => {
    const newBathroom = await Bathroom.createBathroom(req.body);
    return res.status(201).json(newBathroom);
})

router.get('/read', async (req, res) => {
    const bathroomInfo = await Bathroom.readBathroom(req.body);
    return res.status(200).json(bathroomInfo);
})

router.put('/update', async (req, res) => {
    const updatedBathroom = await Bathroom.updateBathroom(req.body);
    return res.status(200).json(updatedBathroom);
})

router.delete('/delete', async (req, res) => {
    const deletedBathroom = await Bathroom.deleteBathroom(req.body);
    return res.status(200).json({"Bathroom":"Deleted"})
})



router.post('/get-nearby', async (req,res) => {
    console.log(req.body)
    const nearbyBathrooms = await Bathroom.getNearby(req.body);
    console.log(nearbyBathrooms);
    return res.status(200).json(nearbyBathrooms);
})
module.exports = router;
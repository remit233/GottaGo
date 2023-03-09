const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/create', async(req, res) => {
    const newUser = await User.createUser(req.body);
    return res.status(201).json(newUser);
})

router.get('/read', async (req, res) => {
    const userInfo = await User.readUser(req.body);
    return res.status(200).json(userInfo);
})

router.put('/update', async (req, res) => {
    const updatedUser = await User.updateUser(req.body);
    return res.status(200).json(updatedUser);
})

router.delete('/delete', async (req, res) => {
    const deletedUser = await User.deleteUser(req.body);
    return res.status(200).json({"User":"Deleted"});
})

module.exports = router;
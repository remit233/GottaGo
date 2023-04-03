const express = require('express');
const router = express.Router();
const bcrypt= require('bcrypt')

const User = require('../models/user');

router.post('/create', async(req, res) => {
    try{
        //creates salt set to default value () the higher the number in function the more time to Hash and more secure
        const salt= await bcrypt.genSalt()
        //appends the salt onto the password
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        
        const userData = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: hashedPassword, // Use the hashed password instead of the plain-text password
            email: req.body.email,
        };
  

        const newUser = await User.createUser(userData);
         return res.status(201).json(newUser);
    }
    catch{
        return res.status(500).send()
    }
    
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
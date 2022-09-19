const express = require('express');
const router = express.Router();
const bcrypt = require ('bcrypt');
const methodOverride = require('method-override')

//middleware

// Model Import
const Models = require('../models/models.js');
const {createUserToken} = require('../middleware/auth')


// Routes ('/test/:ext')

// Users Index
router.get("/users", async (req,res)=>{
    try{
        userIndex = await Models.User.find();
        res.send(userIndex)
    } catch(err){
        console.log(err)
    }
})

//User Show 
router.get("/profile/:ext", async (req, res) => {
    try {
        user = await Models.User.findById(req.params.ext)
        res.send("this works")
    } catch(err) {
        console.log(err)
    }
})

//User update page
router.get("/profile/:ext/update", async (req,res) => {
    try {
        user = await Models.User.findById(req.params.ext)
        res.send("this works 2")
    } catch(err) {
        console.log(err)
    }
})

//User Update put
router.put('/update', async (req, res) => {
    try {
        res.json(
        await Models.User.findByIdAndUpdate(req.body._id, {avatar: req.body.avatar})
        )
    } catch(err) {
        console.log(err)
    }
})

//User Delete req
router.delete('/delete', async (req, res) => {
    try {
        res.json(
        await Models.User.findByIdAndDelete(req.body._id)
        )
    } catch(err) {
        console.log(err)
    }
})

module.exports = router;

const express = require('express');
const router = express.Router();
const bcrypt = require ('bcrypt')
//const methodOverride = require('method-override')

//middleware

// Model Import
const Models = require('../models/models.js');
const {createUserToken} = require('../middleware/auth')


// Routes ('/test/:ext')

// Users Index
router.get("/", async (req,res)=>{
    try{
        
    } catch(err){
        console.log(err)
    }
})

// AUTH REGISTER ROUTE (CREATE - POST -> generate a model instance in the db -> create a token)

router.post('/', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(req.body.password, salt)
        req.body.password = passwordHash;
        //console.log(req.body)
        const newUser = await Models.User.create(req.body);

        res.status(200).json({message: "hitting auth register"})
    } catch(err) {
        res.status(400).json({error: err.message})
    }
})

// User Show


// User Update


// User Delete


module.exports = router;

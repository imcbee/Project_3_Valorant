///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt')

///////////////////////////////
// MODELS
////////////////////////////////

const { User } = require("../models/models.js");
const {createUserToken} = require('../middleware/auth')

///////////////////////////////
// ROUTES
////////////////////////////////

// AUTH REGISTER ROUTE (CREATE - POST -> generate a model instance in the db -> create a token)
router.post("/register", async (req, res) => {
  try{
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(req.body.password, salt)
    req.body.password = passwordHash
    const newUser = await User.create(req.body)
    // what happens if null is return 
    // mongoose - virtuals -> remove password from returned JSON
    res.status(200).json({currentUser: newUser, isLoggedIn: true, })
  }catch(err){
    res.status(400).json({error: err.message})
  }
});

// AUTH LOGIN ROUTE (POST - create token if credentials match)
router.post("/login", async (req, res) => {
    try{
        const loggingUser = req.body.username
        const foundUser = await User.findOne({username: loggingUser})
        const token = await createUserToken(req, foundUser)
        console.log("created token:", token)
        res.status(200).json({user: foundUser, isLoggedIn: true, token})
    }catch(err){
      res.status(400).json({error: err.message})
    }
});

module.exports = router;

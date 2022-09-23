const express = require('express');
const router = express.Router();
const bcrypt = require ('bcrypt');
const methodOverride = require('method-override');
const axios = require('axios');
    //npm install node-fetch
    //import fetch from 'node-fetch';
require('dotenv').config()

const { REACT_APP_API_KEY } = process.env
//middleware
const apiAccess = require('unofficial-valorant-api')
const test = new apiAccess()

const getThisBread = new apiAccess()


// Model Import
const Models = require('../models/models.js');
const {createUserToken} = require('../middleware/auth')


// Routes ('/test/:ext')

//test home
router.get('/', async (req, res) =>{
    try{
        async function getLeaderBoard () {
            let leaderBoard = []
            try {
                const response = await Models.Player.find({leaderboardRank: {$gte: 1} && {$lte: 4}})
                console.log("test: ", response)
                // const lbjson = await response.json()
                // console.log("test: ", lbjson[0])
                leaderBoard = [response[0], response[1], response[2], response[3]]
                res.send(leaderBoard) //currently fetching leaderboard from the backend instead of API call
            } catch (err) {
                console.log(err);
            }
        }

        getLeaderBoard()
    } catch(err) {
        console.log(err)
    }
})

router.get('/test', async (req, res) =>{
    try{
        async function getLeaderBoard () {
            let leaderBoard = []
            try {
                //test = new poop()
                // const test = await testPoop.getMMR({
                //     version: 'v1',
                //     region: 'na',
                //     name: "C9 Xeppaa",
                //     tag: 'XITER'

                // })

                const step1 = await test.getAccount({
                    name: 'C9 Xeppaa',
                    tag: 'XITER'
                })

                const step2 = await test.getMatchesByPUUID({
                    region: step1.data.region,
                    puuid: step1.data.puuid,
                })
                console.log(step2)
                const info = {
                    puuid: step1.data.puuid,
                    name: step1.data.name,
                    tag: step1.data.tag,
                    region: step1.data.region,
                    account_level: step1.data.account_level,
                    card: step1.data.card,
                    currenttier: step2.data.currenttier,
                    elo: step2.data.elo,
                    images: step2.data.images,// {lareg, small, triangle_down, triangle_up}, //this is rank
                    ranking_in_tier: step2.data.ranking_in_tier, 
                    matchHistory_small: "Work in progress", //data3.data,
                    //The following is derived data that i will calulate above
                    wr: "Testing",
                    favHeros: ["Testing", "OneTwo", "Three"],
                    favGun: "Gun",
                    friends: ["This will take math"]
                }

                res.send (info)
            } catch (err) {
                console.log(err);
            }
        }

        getLeaderBoard()
    } catch(err) {
        console.log(err)
    }
})

// Users Index
router.get("/users", async (req,res)=>{
    try{
        userIndex = await Models.User.find();
        res.send(userIndex)
    } catch(err){
        console.log(err)
    }
})

//Profile Show 
router.get("/profile/:ext/:tag", async (req, res) => {
    
    try {
        

        const getAcct = await getThisBread.getAccount({
            name: req.params.ext,
            tag: req.params.tag
        })
        const data = getAcct //these are really just here because it made refactoring faster

        //console.log(data.data)

        const getAcctData = await getThisBread.getMatchesByPUUID({
            region: data.data.region,
            puuid: data.data.puuid,
        })
        const data2 = getAcctData //these are really just here because it made refactoring faster

        const getRankData = await getThisBread.getMMRHistoryByPUUID({
            region: data.data.region,
            puuid: data.data.puuid
        })
        const data3 = getRankData
        console.log (data3)

        const info = {
            puuid: data.data.puuid,
            name: data.data.name,
            tag: data.data.tag,
            region: data.data.region,
            account_level: data.data.account_level,
            card: data.data.card,
            currenttier: data2.data.currenttier,
            elo: data3.data[0].elo,
            images: data2.data.images,// {lareg, small, triangle_down, triangle_up}, //this is rank
            ranking_in_tier: data2.data.ranking_in_tier,
            currenttierpatched: data3.data[0].currenttierpatched, 
            rankedData: data3.data,
            matchHistory_small: "Work in progress", //data3.data,
            //The following is derived data that i will calulate above
            wr: "Testing",
            favHeros: ["Testing", "OneTwo", "Three"],
            favGun: "Gun",
            friends: ["This will take math"]
        }

        res.json(info)
    } catch(err) {
        console.log(err)
    }
})

//User Show

router.get("/user/:ext", async (req,res) => {
    try {
        const user = await Models.User.find({username: req.params.ext})
        //console.log("hows this: ", user)
        res.send(user)
    } catch(err) {
        console.log(err)
    }
})

//User update page
router.get("/update/:ext", async (req,res) => {
    try {
        const user = await Models.User.find({username: req.params.ext})
        //console.log("hows this: ", user)
        res.send(user)
    } catch(err) {
        console.log(err)
    }
})

//User Update put //may need to refactor 
router.put('/update', async (req, res) => {
    try {
        res.json(
        await Models.User.findByIdAndUpdate(req.body._id, {avatar: req.body.avatar})
        //will probably rework or add anothe update route to include joining/leaving groups
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
        //will need to search database and delete other models tied to user's ._id
        )
    } catch(err) {
        console.log(err)
    }
})

module.exports = router;

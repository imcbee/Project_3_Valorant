const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//---Player

const playerSchema = new Schema ({
    puuid: {type: String, required: true, unique: true}, //for referencing other API calls
    card: {type: Object, default: null},
    favagent: {type: String, default: null}, //lists most played agent
    favgun: {type: String, default: null}, //list most used gun
    wr: {type: Number, default: null}, //displays winrate
    kda: {type: Number, default: null}, //displays kda
    rank: {type: Number, default: null}, //displays rank
    commonAlly: [{type: String, default: null}], //derived from match history, lists teammates that are in multiple games
    linkedUser: {type: mongoose.Types.ObjectId, unique: true, ref: 'User', default: null} 
})

const leaderboardSchema = new Schema ({

})
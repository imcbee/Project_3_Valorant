const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schemas

//---User

const userSchema = new Schema ({
    username: {type: String, required: true, unique: true },
    password: {type: String, required: true}, 
    email: {type: String, required: true, unique: true},
    tag: {type: String, required: true},
    avatar: {type: String}, 
    groups: [{type: mongoose.Types.ObjectId, ref: 'Group', default: null},], 
    comments: [{type: mongoose.Types.ObjectId, ref: 'Comment', default: null},],  
    linkedPlayer: {type: mongoose.Types.ObjectId, ref: 'Player', default: null}
    //
},{
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (_doc, ret) => {
            delete ret.password
            return ret
        }
    }
})

//---Player

const playerSchema = new Schema ({
    puuid: {type: String, required: true, unique: true}, //for referencing other API calls
    gameName: {type: String, required: true, unique: true},
    tag: {type: String, required: true},
    card: {type: Object, default: null},
    favagent: {type: String, default: null}, //lists most played agent
    favgun: {type: String, default: null}, //list most used gun
    wr: {type: Number, default: null}, //displays winrate
    kda: {type: Number, default: null}, //displays kda
    rank: {type: Number, default: null}, //displays rank
    leaderboardRank: {type: Number, default: null},
    rankedRating: {type: Number, default: null},
    numberOfWins: {type: Number, default: 0},
    competitiveTier: {type: String, default: null},
    commonAlly: [{type: String, default: null}], //derived from match history, lists teammates that are in multiple games
    linkedAccount: {type: mongoose.Types.ObjectId, default: null, ref: 'User'} 
})

//---Groups
const groupSchema = new Schema ({
    name: {type: String, required: true, default: 'Name ur grp'},
    profilepic: {type: String}, //URL or upload
    owner : {type: mongoose.Types.ObjectId, required: true, ref: 'User'},
    players : [{type: mongoose.Types.ObjectId, required: true, ref: 'User'},],
})
//---Comments

const commentSchema = new Schema ({
    title: {type: String},
    commentBody: {type: String},
    userRef: {type: mongoose.Types.ObjectId, required: true, ref: 'User'},
})

//Exports

const User = mongoose.model("User", userSchema)
const Group = mongoose.model("Group", groupSchema)
const Comment = mongoose.model("Comment", commentSchema)
const Player = mongoose.model("Player", playerSchema)

module.exports = {
    User,
    Group,
    Comment,
    Player,
};
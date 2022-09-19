const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schemas

//---User

const userSchema = new Schema ({
    username: {type: String, required: true, unique: true },
    password: {type: String, required: true}, 
    email: {type: String, required: true, unique: true},
    avatar: {type: String}, 
    groups: [{type: mongoose.Types.ObjectId, ref: 'Group', default: null},], 
    comments: [{type: mongoose.Types.ObjectId, ref: 'Comment', default: null},],
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

module.exports = {
    User,
    Group,
    Comment,
};
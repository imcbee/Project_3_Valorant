const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schemas

//---User

const userSchema = new Schema ({
    name: {String, required: true },
    media: {String}, 
    email: {String, required: true},
    password: {String, required: true}, 
    groups: [{type: mongoose.Types.ObjectId, ref: 'Group', default: null},], 
    comments: [{type: mongoose.Types.ObjectId, ref: 'Comment', default: null},],
    //
})

//---Groups
const groupSchema = new Schema ({
    name: {String, required: true, default: 'Name ur grp'},
    profilepic: {type: String}, //URL or upload
    admin : {type: mongoose.Types.ObjectId, required: true, ref: 'User'},
    players : [{type: mongoose.Types.ObjectId, required: true, ref: 'User'},],
})
//---Comments

const commentSchema = new Schema ({
    title: {String},
    commentBody: {String},
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
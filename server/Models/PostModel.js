const mongoose = require('mongoose');
const {Schema } = mongoose;

const Post = new Schema(
    {
        Email: { type: String, required: true },
        UserLink: { type: String, required: true},
        PostText: { type: String, required: false},
        Attachments:{
            type: Array,
            default : []
        },
        Likes: {
            type: Array,
            default : []
        },
        Comments: {
            type: Array,
            default : []
        },
        Keywords: {
            type: Array,
        },
        timestamp:
        {
            type: Date,
            default: Date.now,
        },
    }
);
const Posts = mongoose.model('Post' , Post);
module.exports = Posts;

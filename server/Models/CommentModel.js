const mongoose = require('mongoose');
const {Schema } = mongoose;

const Comments = new Schema(
    {
        PostId:{
            type: String,
        },
        ProfilePicture:{
            type: String,
        },
        Name:{
            type: String,
        },
        UserLink: { type: String, required: true},
        CommentText : { type: String },
        Replies:{
            type: Array,
        },
        CommentLikes:{
            type: Array,
        },
        timestamp:
        {
            type: Date,
            default: Date.now,
        },
    }
);
const Comment = mongoose.model('Comment' , Comments);
module.exports = Comment;

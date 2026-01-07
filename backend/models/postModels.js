import mongoose from "mongoose";
import User from "./userModels.js";

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    likes:{
        type:Number,

    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    media:{
        type: String,
        default: '',
    },
    active:{
        type: Boolean,
        default: true,
    },
    fileType:{
        type: String,
        default: '',
    },
});

const Post = mongoose.model('Post', postSchema);
export default Post;
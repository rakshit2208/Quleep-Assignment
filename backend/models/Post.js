// models/Post.js
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true }); // Enable timestamps

module.exports = mongoose.model("Post", PostSchema);

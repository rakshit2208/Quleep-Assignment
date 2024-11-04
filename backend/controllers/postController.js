const Post = require("../models/Post");

exports.createPost = async (req, res) => {
    try {
        const post = new Post({ ...req.body, author: req.user.userId });
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ error: "Post creation failed" });
    }
};

exports.getPosts = async (req, res) => {
    const posts = await Post.find().populate("author", "username");
    res.json(posts);
};

exports.getPost = async (req, res) => {
    const post = await Post.findById(req.params.id).populate("author", "username");
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
};

exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) return res.status(404).json({ error: "Post not found" });
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: "Failed to update post" });
    }
};

exports.deletePost = async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json({ message: "Post deleted successfully" });
};

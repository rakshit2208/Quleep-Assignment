const express = require("express");
const { createPost, getPosts, getPost, updatePost, deletePost, getMyPosts } = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, createPost);
router.get("/", getPosts);
router.get("/my-posts", authMiddleware, getMyPosts);
router.get("/:id", getPost);
router.put("/:id", authMiddleware, updatePost);
router.delete("/:id", authMiddleware, deletePost);


module.exports = router;

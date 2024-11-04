// src/components/Posts/PostForm.js
import React, { useState } from "react";
import { createPost, updatePost } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

function PostForm({ isEditMode, existingPost }) {
    const [title, setTitle] = useState(existingPost ? existingPost.title : "");
    const [content, setContent] = useState(existingPost ? existingPost.content : "");
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        const postData = { title, content };

        try {
            if (isEditMode) {
                await updatePost(id, postData, token);
            } else {
                await createPost(postData, token);
            }
            navigate("/");
        } catch (error) {
            console.error("Failed to submit post:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{isEditMode ? "Edit Post" : "Create Post"}</h2>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
            <button type="submit">{isEditMode ? "Update Post" : "Create Post"}</button>
        </form>
    );
}

export default PostForm;

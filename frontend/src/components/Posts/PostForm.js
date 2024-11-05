// src/components/Posts/PostForm.js
import React, { useState } from "react";
import { createPost, updatePost } from "../../services/api";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function PostForm() {
    const { id } = useParams();
    const { state } = useLocation();
    const isEditMode = state?.isEditMode || false;
    const existingPost = state?.existingPost || null;

    const [title, setTitle] = useState(existingPost ? existingPost.title : "");
    const [content, setContent] = useState(existingPost ? existingPost.content : "");
    const [imageUrl, setImageUrl] = useState(null);

    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageUrl(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);

        for (const pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }

        
        if (imageUrl){
        
            formData.append("imageUrl", imageUrl);
            console.log("imageUrl appended to FormData:", imageUrl);
        
        }
            

        try {
            if (isEditMode) {
                await updatePost(id, formData, token);
                toast.success("Post updated successfully!");
            } else {

                console.log("Formdata.........",formData);
                await createPost(formData, token);
                toast.success("Post created successfully!");
            }

            setTimeout(() => {
                navigate("/my-blogs");
            }, 3200); 

        } catch (error) {
            console.error("Failed to submit post:", error);
            toast.error("Failed to submit post. Please try again.");
        }
    };

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
                <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                        {isEditMode ? "Edit Post" : "Create Post"}
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                        <div>
                            <label htmlFor="title" className="block text-gray-600 font-medium mb-1">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter post title"
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="content" className="block text-gray-600 font-medium mb-1">
                                Content
                            </label>
                            <textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Enter post content"
                                required
                                rows="6"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="image" className="block text-gray-600 font-medium mb-1">
                                Upload Image
                            </label>
                            <input
                                type="file"
                                id="image/*"
                                onChange={handleImageChange}
                                
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none transition duration-300"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 font-semibold"
                        >
                            {isEditMode ? "Update Post" : "Create Post"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default PostForm;

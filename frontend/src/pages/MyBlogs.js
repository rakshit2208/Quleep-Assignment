// src/pages/MyBlogs.js
import React, { useEffect, useState } from "react";
import { deletePost, getMyPosts } from "../services/api";
import { useNavigate } from "react-router-dom";

function MyBlogs() {
    const [myPosts, setMyPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMyPosts = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await getMyPosts(token);
                setMyPosts(response.data);
            } catch (error) {
                console.error("Failed to fetch my posts:", error);
            }
        };

        fetchMyPosts();
    }, []);

    const handleDelete = async (postId) => {
        const token = localStorage.getItem("token");
        try {
            await deletePost(postId, token);
            setMyPosts(myPosts.filter(post => post._id !== postId)); // Update the list after deletion
        } catch (error) {
            console.error("Failed to delete post:", error);
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 text-center pt-5">My Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4 pr-4">
                {myPosts.map(post => (
                    <div key={post._id} className="bg-white p-4 rounded-xl shadow-2xl">
                        <h3 className="text-lg font-semibold">{post.title}</h3>
                        <p className="text-gray-600 mb-2">{post.content}</p>
                        <div className="flex justify-between">
                            {/* Edit and Delete Buttons */}
                            {/* <button className="text-blue-500 hover:underline">Edit</button> */}
                            <button
                                onClick={() => navigate(`/edit-post/${post._id}`, { state: { isEditMode: true, existingPost: post } })}
                                className="text-blue-500 hover:underline"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(post._id)}
                                className="text-red-500 hover:underline"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyBlogs;

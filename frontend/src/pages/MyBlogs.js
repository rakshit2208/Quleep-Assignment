// src/pages/MyBlogs.js
import React, { useEffect, useState } from "react";
import { deletePost, getMyPosts } from "../services/api";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
// const API_URL = "http://localhost:5000";
const API_URL = "https://mern-blog-apis.vercel.app";



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
            setMyPosts(myPosts.filter(post => post._id !== postId)); 
            toast.success("Post deleted successfully!");
        } catch (error) {
            console.error("Failed to delete post:", error);
            toast.error("Failed to delete post. Please try again.");
        }
    };

    return (
        <div>
        <Toaster position="top-center" reverseOrder={false} />
        <h2 className="text-2xl font-bold mb-4 text-center pt-5">My Blogs</h2>
        {myPosts.length === 0 ? (
            <div className="flex justify-center items-center text-center h-40">
            <p className="text-lg text-gray-500">You currently have no posts. Create a new post to get started!</p>
        </div>
        
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4 pr-4">
                {myPosts.map(post => (
                    <div key={post._id} className="bg-white p-4 rounded-xl shadow-2xl">
                        {post.imageUrl && (
                            <img
                            src={post.imageUrl?`${API_URL}${post.imageUrl}` : null} 

                                alt={post.title}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                        )}
                        <h3 className="text-lg font-semibold">{post.title}</h3>
                        <p className="text-gray-600 mb-2">{post.content}</p>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={() => navigate(`/edit-post/${post._id}`, { state: { isEditMode: true, existingPost: post } })}
                                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-200 font-medium"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(post._id)}
                                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-200 font-medium"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
    );
}

export default MyBlogs;

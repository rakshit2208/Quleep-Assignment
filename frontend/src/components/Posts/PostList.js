import React, { useEffect, useState } from "react";
import { getPosts } from "../../services/api";
import { Link } from "react-router-dom";
import Navbar from "../../common/Header";

const API_URL = "http://localhost:5000";

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await getPosts();
                setPosts(response.data);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
            }
        };
        fetchPosts();
    }, []);

    // Function to format the date
    const formatDate = (dateString) => {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <>
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {posts.length > 0 ? (
                    posts.map(post => (
                        <div key={post._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                            {post.imageUrl && (
                                <img 
                                    src={post.imageUrl?`${API_URL}${post.imageUrl}` : null} 
                                    alt={post.title} 
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                            )}
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {post.content}
                            </p>
                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center">
                                        <span className="font-medium text-gray-700">
                                            By: {post.author.username}
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs">
                                            Created at:
                                        </p>
                                        <p className="text-xs font-medium">
                                            {formatDate(post.updatedAt)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No posts available</p>
                )}
            </div>
        </div>
        </>
    );
}

export default PostList;

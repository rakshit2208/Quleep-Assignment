// src/components/Posts/PostList.js
import React, { useEffect, useState } from "react";
import { getPosts } from "../../services/api";
import { Link } from "react-router-dom";

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await getPosts();
            setPosts(response.data);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        <Link to={`/posts/${post._id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;

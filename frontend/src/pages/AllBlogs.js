// src/pages/AllBlogs.js
import React from "react";
import PostList from "../components/Posts/PostList";

function AllBlogs() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">All Blogs</h2>
            <PostList />
        </div>
    );
}

export default AllBlogs;

// src/pages/Home.js
import React from "react";
import PostList from "../components/Posts/PostList";
import Register from "../components/Auth/Register";

function Home() {
    return (
        <div>
            {/* <h1>Welcome to the Blog</h1> */}
            {/* <PostList /> */}
            <Register/>
        </div>
    );
}

export default Home;

// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Profile from "./pages/Profile";
import AllBlogs from "./pages/AllBlogs";
import MyBlogs from "./pages/MyBlogs";
import CreatePost from "./pages/CreatePost";
import PostForm from "./components/Posts/PostForm";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="profile" element={<Profile />} />
                <Route path="all-blogs" element={<AllBlogs />} />
                <Route path="my-blogs" element={<MyBlogs />} />
                <Route path="create-blogs" element={<CreatePost />} />
                <Route path="/edit-post/:id" element={<PostForm />} />


            </Routes>
        </Router>
    );
}

export default App;

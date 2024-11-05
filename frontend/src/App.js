// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Profile from "./pages/Profile";
import MyBlogs from "./pages/MyBlogs";
import PostForm from "./components/Posts/PostForm";
import PostList from "./components/Posts/PostList";
import Header from "./common/Header";
import { MainLayout } from "./components/MainLayout";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                <Route
                    element={
                        <>
                            <MainLayout />
                        </>
                    }
                >
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/all-blogs" element={<PostList />} />
                    <Route path="/my-blogs" element={<MyBlogs />} />
                    <Route path="/create-blogs" element={<PostForm />} />
                    <Route path="/edit-post/:id" element={<PostForm />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;

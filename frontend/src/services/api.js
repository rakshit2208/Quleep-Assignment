// src/services/api.js
import axios from "axios";

// local api url
// const API_URL = "http://localhost:5000/api";

// deployed api url
const API_URL = "https://mern-blog-apis.vercel.app/api";


export const registerUser = (userData) => axios.post(`${API_URL}/auth/register`, userData);

export const loginUser = (userData) => axios.post(`${API_URL}/auth/login`, userData);

export const createPost = (postData, token) => axios.post(`${API_URL}/posts`, postData, {
    headers: { Authorization: `Bearer ${token}`,"Content-Type": "multipart/form-data",}
});

export const getPosts = () => axios.get(`${API_URL}/posts`);

export const getPost = (id) => axios.get(`${API_URL}/posts/${id}`);

export const getMyPosts = (token) => axios.get(`${API_URL}/posts/my-posts`, {
    headers: { Authorization: `Bearer ${token}` }
});

export const updatePost = (id, postData, token) => axios.put(`${API_URL}/posts/${id}`, postData, {
    headers: { Authorization: `Bearer ${token}`,"Content-Type": "multipart/form-data",}
});

export const deletePost = (id, token) => axios.delete(`${API_URL}/posts/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
});


export const updateProfile = (formData, token) =>
    axios.put(`${API_URL}/user/profile`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        },
    });
    export const fetchUserProfile = async (token) => {
        const response = await axios.get(`${API_URL}/user/user-profile`, {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the header
            },
        });
        return response.data;
    };
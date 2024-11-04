// src/services/api.js
import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const registerUser = (userData) => axios.post(`${API_URL}/auth/register`, userData);

export const loginUser = (userData) => axios.post(`${API_URL}/auth/login`, userData);

export const createPost = (postData, token) => axios.post(`${API_URL}/posts`, postData, {
    headers: { Authorization: `Bearer ${token}` }
});

export const getPosts = () => axios.get(`${API_URL}/posts`);

export const getPost = (id) => axios.get(`${API_URL}/posts/${id}`);

export const getMyPosts = (token) => axios.get(`${API_URL}/posts/my-posts`, {
    headers: { Authorization: `Bearer ${token}` }
});

export const updatePost = (id, postData, token) => axios.put(`${API_URL}/posts/${id}`, postData, {
    headers: { Authorization: `Bearer ${token}` }
});

export const deletePost = (id, token) => axios.delete(`${API_URL}/posts/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
});

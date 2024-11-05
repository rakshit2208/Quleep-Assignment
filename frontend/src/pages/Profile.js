// src/pages/Profile.js
import React, { useState, useEffect } from "react";
import { updateProfile, fetchUserProfile } from "../services/api"; // Import fetchUserProfile to get user data
import toast from "react-hot-toast";

const API_URL = "http://localhost:5000";

function Profile() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [profilePic, setProfilePic] = useState(null);
    const [preview, setPreview] = useState(null);
    const [existingProfilePic, setExistingProfilePic] = useState(null); // State for existing profile picture

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("token");
                const userData = await fetchUserProfile(token); // Fetch user data
                setUsername(userData.username);
                setEmail(userData.email);
                setExistingProfilePic(userData.profilePic ? `${API_URL}${userData.profilePic}` : null); // Set existing profile picture
            } catch (error) {
                console.error("Failed to fetch user profile:", error);
                toast.error("Failed to load profile data");
            }
        };

        fetchProfile();
    }, []);

    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        setProfilePic(file);
        setPreview(URL.createObjectURL(file)); 
    };

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        if (profilePic) {
            formData.append("profilePic", profilePic); 
        }

        console.log("profile formdata.........",formData);

        try {
            const token = localStorage.getItem("token");
            await updateProfile(formData, token);
            toast.success("Profile updated successfully!");
        } catch (error) {
            console.error("Failed to update profile:", error);
            toast.error("Failed to update profile");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                    {(preview || existingProfilePic) && (
                        <img
                            src={preview || existingProfilePic}
                            alt="Profile"
                            className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                            crossOrigin="anonymous"
                        />
                    )}
                </div>
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    Update Profile
                </h2>
                <form onSubmit={handleProfileUpdate} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">
                            Profile Picture
                        </label>
                        <input
                            type="file"
                            onChange={handleProfilePicChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 font-semibold"
                    >
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Profile;

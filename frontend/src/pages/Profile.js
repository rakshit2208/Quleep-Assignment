// src/pages/Profile.js
import React, { useState } from "react";

function Profile() {
    const [username, setUsername] = useState("JohnDoe");
    const [email, setEmail] = useState("john@example.com");
    const [profilePic, setProfilePic] = useState(null);

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        // Handle profile update logic here
    };

    return (
        <>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Profile</h2>

        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
            <form onSubmit={handleProfileUpdate} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Profile Picture</label>
                    <input
                        type="file"
                        onChange={(e) => setProfilePic(e.target.files[0])}
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>
                <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg">
                    Update Profile
                </button>
            </form>
        </div>

        </div>
        </>
    );
}

export default Profile;

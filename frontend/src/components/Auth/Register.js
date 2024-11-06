import React, { useState } from "react";
import { registerUser } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { UserPlus, Mail, Lock, ArrowRight } from "lucide-react";
import toast, { Toaster } from 'react-hot-toast';

function Register() {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Loading toast
        const loadingToast = toast.loading('Creating your account...');

        try {
            await registerUser(formData);

            // Success toast
            toast.success('Account created successfully!', {
                duration: 3000,
                id: loadingToast,
            });

            setTimeout(() => {
                navigate("/login");
            }, 500);
        } catch (error) {

            if (error.response?.data?.message?.includes('email')) {
                toast.error('Email already exists', {
                    duration: 3000,
                    id: loadingToast,
                });
                setError("Email already exists. Please use a different email.");
            } else {
                toast.error('Registration failed. Please try again.', {
                    duration: 3000,
                    id: loadingToast,
                });
                setError("Registration failed. Please try again.");
            }
            console.error("Registration failed:", error);
        }
    };

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />

            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
                    <div>
                        <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
                            Create your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Join us to get started with your journey
                        </p>
                    </div>

                    {error && (
                        <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
                            {error}
                        </div>
                    )}

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Username
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <UserPlus className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Enter your username"
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Create a password"
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
                            >
                                Create Account
                            </button>
                        </div>
                    </form>
                    <div>
                        <p className="text-center text-sm text-gray-600">
                            Already have an account?{" "}
                            <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                                Sign in instead
                            </a>
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Register;
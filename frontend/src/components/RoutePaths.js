import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import { MainLayout } from './MainLayout';
import Profile from '../pages/Profile';
import PostList from './Posts/PostList';
import MyBlogs from '../pages/MyBlogs';
import PostForm from './Posts/PostForm';
import PrivateRoute from './PrivateRoute';


export const RoutePaths = () => {
    const isAuthenticated = !!localStorage.getItem('token');

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={isAuthenticated ? <Navigate to="/" /> : <Navigate to="/login" />} />

                <Route path="/login" element={isAuthenticated ? <Navigate to="/all-blogs" /> : <Login />} />
                <Route path="/register" element={isAuthenticated ? <Navigate to="/all-blogs" /> : <Register />} />
                

                <Route element={<PrivateRoute />}>
                    <Route element={<MainLayout />}>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/all-blogs" element={<PostList />} />
                    <Route path="/my-blogs" element={<MyBlogs />} />
                    <Route path="/create-blogs" element={<PostForm />} />
                    <Route path="/edit-post/:id" element={<PostForm />} />
                    </Route>
                </Route>
            
            </Routes>
        </BrowserRouter>
    );
};
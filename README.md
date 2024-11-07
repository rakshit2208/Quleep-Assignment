# MERN Blog Application

A full-stack blog application built using the MERN stack (MongoDB, Express, React, Node.js). This application allows users to register, create posts, view all blog posts, update their profile (including profile picture upload), and perform CRUD operations on posts.

## Features

- User Authentication (Register, Login, Logout)
- Profile Management with Profile Picture Upload
- Create, Read, Update, and Delete (CRUD) Operations on Blog Posts
- Responsive and Interactive User Interface

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **File Upload**: Multer for profile picture handling

---

## Prerequisites

Ensure you have the following installed before setting up the application:

- **Node.js** (>= v14)
- **npm** or **yarn**
- **MongoDB**: A MongoDB connection URI (using MongoDB Atlas or a local MongoDB server)
- **Git** (optional)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/rakshit2208/Quleep-Assignment.git
cd Quleep-Assignment

---

### 2. Environment Variables

Create a .env file in the root directory of both the backend and frontend folders with the necessary environment variables.

Backend Environment Variables (/backend/.env)

```bash
PORT=5000
MONGO_URI=mongodb+srv://yadavrakshit097:I7a2fHZZQuUJcHPK@cluster0.as7vx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=blogWeb@22

### 3. Folder Structure

Quleep-Assignment/
│
├── backend/                # Backend server
│   ├── controllers/        # Controllers for handling requests
│   ├── middleware/         # Middleware for authentication
│   ├── models/             # Mongoose models (User, Post)
│   ├── routes/             # API routes
│   ├── public
        |-- /uploads
             |-- /profile_pics
             |-- /post_pics       

│   ├── .env                # Environment variables for backend
│   └── server.js           # Main server file
│
└── frontend/               # Frontend client
    ├── public/             # Public assets
    ├── src/                # Source code
    │   ├── components/     # React components
        ├── common/
        ├── context/         
    │   ├── pages/          # React pages (Home, Profile, etc.)
    │   ├── services/       
           ├── api.js/       # API Services Function
        ├── images/       # API service functions
    │   └── App.js          # Main app component



## Setting Up the Backend

1.Navigate to the backend folder:

```bash
cd backend

2.Install backend dependencies:

```bash
npm install

3.Run the backend server:

```bash
npx nodemon server.js

4.The backend server should start on http://localhost:5000.


## Setting Up the Frontend

1.Navigate to the frontend folder:

```bash
cd frontend


2.Install frontend dependencies:

```bash
npm install

3.Run the frontend server:

```bash
npm start


4.The frontend application should start on http://localhost:3000.


## Usage

Once both servers are running:

Open http://localhost:3000 in your browser.

- Register a new user or log in if you already have an account.
- After logging in, you can:
   - Create a new blog post.
   - View all blog posts.
   - Update or delete your posts.
   - Update your profile picture and other details on the Profile page.

## API Endpoints

The backend API provides the following endpoints:

### Auth Routes

- POST /api/auth/register - Register a new user
- POST /api/auth/login - Log in a user

### User Routes

- PUT /api/user/profile - Update user profile (requires authentication)

### Post Routes

- GET /api/posts - Get all posts
- POST /api/posts - Create a new post (requires authentication)
- PUT /api/posts/:id - Update a post by ID (requires authentication)
- DELETE /api/posts/:id - Delete a post by ID (requires authentication)
- GET /api/posts/my-posts - Get all posts by the authenticated user









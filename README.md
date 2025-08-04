# Netflix Clone (MERN Stack)

This project is a full-stack web application built with the MERN (MongoDB, Express.js, React, Node.js) stack. It's designed to replicate the core features and feel of Netflix, providing a great learning experience for full-stack development.

---

## Tech Stack

* **Frontend:** React, Tailwind CSS, Axios
* **Backend:** Node.js, Express.js, Mongoose
* **Database:** MongoDB (Atlas)
* **Authentication:** JSON Web Tokens (JWT)

# 🎬 Netflix Clone (MERN Stack)

This project is a full-stack web application built with the **MERN (MongoDB, Express.js, React, Node.js)** stack. It's designed to replicate the core features and feel of Netflix, providing a great learning experience for full-stack development.

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, Axios  
- **Backend:** Node.js, Express.js, Mongoose  
- **Database:** MongoDB (Atlas)  
- **Authentication:** JSON Web Tokens (JWT)

---

## 🚀 Project Setup

### ✅ Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your computer.

---

### 📥 1. Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone https://github.com/community-2024/netflix-clone-.git
cd netflix-clone-
```

### ⚙️2. Environment Configuration

Before running the backend, you must create an environment file.

1. Navigate to the backend directory: cd netflix-clone-backend

2. Create a new file named .env.

3. Copy the following content into it, replacing placeholder values as needed.

```bash
# .env

# Your MongoDB Connection String from Atlas
MONGO_URI="mongodb+srv://community-2024:community-2024@cluster0.hxxatyi.mongodb.net/netflix-clone?retryWrites=true&w=majority&appName=Cluster0"

# A long, random string for signing JWTs
JWT_SECRET=your_super_secret_jwt_string

# The port for the server
PORT=8000
```

### 📜 Available Scripts

This project is split into two main parts: a backend server and a frontend client. You will need to run them in two separate terminals.

Backend (netflix-clone-backend)
In your first terminal, navigate to the backend directory to run these scripts.

```bash 
cd netflix-clone-backend

```
```bash 
npm install
```
Installs all the necessary dependencies for the React application. You must run this command before you can start the app.

```bash 
npm start

```

Runs the app in development mode.

Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

```bash
npm run build
```
Builds the app for production to the build folder.

It correctly bundles React in production mode and optimizes the build for the best performance. Your app is ready to be deployed!

## How to Contribute

We follow a standard Git workflow to ensure code quality and collaboration.

1. Create a Feature Branch: Before starting work, create a new branch from main.

```bash
git checkout -b feature/your-descriptive-branch-name
```

2. Commit Your Changes: Make your changes and commit them with a clear message

```bash 
git add .
git commit -m "feat: Implement user login functionality"
```
3. Push to GitHub & Open a Pull Request: Push your branch to GitHub and open a pull request for review.
 ```bash 
 git push -u origin feature/your-descriptive-branch-name
 ```
<<<<<<< HEAD
Happy coding!
=======
Happy coding!
>>>>>>> 41189adb5d5a79cb05c4e96b0594cfabd7f334a3

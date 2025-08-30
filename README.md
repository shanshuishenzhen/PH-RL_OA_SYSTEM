# Simple OA System

A mini-OA (Office Automation) system designed for small startups. This application provides foundational features for team communication and project management.

## Features

### Completed Features

*   **User Authentication**: Secure user registration and login system using JWT for authentication.
*   **Project Management (Full CRUD)**:
    *   Users can create, view, update, and delete their own projects.
    *   The UI provides a clean dashboard for viewing all projects and a form for creating/editing projects.
*   **Project Detail View**: Users can click on any project to navigate to a dedicated page showing that project's details. This page is the foundation for where task and file management would live.

### Incomplete Features (Blocked by Environment Issue)

*   **Real-time Chat**: This feature was planned to allow one-on-one real-time messaging between users.
*   **Project File Management**: This feature was planned to allow users to upload and manage files associated with a specific project.

**Reason for Incompletion:** The development of these features was blocked by a persistent and unresolvable environment error (`ENOENT: no such file or directory, uv_cwd`) that occurred when trying to install new backend dependencies (`socket.io`, `multer`) using `npm`. Multiple workarounds were attempted without success. In a standard Node.js environment, these dependencies should install correctly.

## Technology Stack

*   **Backend**: Node.js, Express, MongoDB with Mongoose
*   **Frontend**: React, React Router, Axios
*   **Authentication**: JSON Web Tokens (JWT), bcryptjs

## Setup and Installation

To run this project in a new environment, follow these steps:

1.  **Prerequisites**: Make sure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed.

2.  **Backend Setup**:
    *   Navigate to the project's root directory.
    *   Run `npm install` to install all backend dependencies.
    ```bash
    npm install
    ```

3.  **Frontend Setup**:
    *   Navigate to the `client` directory.
    *   Run `npm install` to install all frontend dependencies.
    ```bash
    cd client
    npm install
    ```

## Running the Application

1.  **Start the Backend Server**:
    *   From the root directory, run the `dev` script to start the backend server with `nodemon`. The server will run on `http://localhost:5000`.
    ```bash
    npm run dev
    ```

2.  **Start the Frontend Development Server**:
    *   In a separate terminal, navigate to the `client` directory.
    *   Run the `start` script. The React app will open in your browser at `http://localhost:3000`.
    ```bash
    cd client
    npm start
    ```

The frontend is configured to proxy API requests to the backend server. You can now register a new user and start using the application.

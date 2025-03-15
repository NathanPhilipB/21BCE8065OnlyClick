# Task Management API

A RESTful API built with **Express.js**, **TypeScript**, and **MongoDB** for managing tasks and user authentication.

---

## Features

- **User Authentication**:
  - Sign up and log in with email and password.
  - JWT-based authentication for secure access.
- **Task Management**:
  - Create, read, update, and delete tasks.
  - Tasks are associated with the authenticated user.
- **Error Handling**:
  - Centralized error-handling middleware for consistent error responses.
- **Environment Variables**:
  - Secure configuration using `.env` for sensitive data.

---

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - TypeScript
- **Database**:
  - MongoDB (with Mongoose for schema modeling)
- **Authentication**:
  - JSON Web Tokens (JWT)
  - bcrypt for password hashing
- **Other Tools**:
  - CORS for cross-origin requests
  - dotenv for environment variable management

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

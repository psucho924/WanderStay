# WanderStay 🌍

## Live Application

🚀 **Live Demo:** https://wanderstay-xew1.onrender.com/listing

---

## Project Overview

WanderStay is a full-stack, server-rendered travel and accommodation platform built using Node.js and Express. The application allows users to explore, manage, and interact with travel listings through a secure authentication system. It follows a clean MVC architecture with well-separated routes, controllers, models, views (EJS), and static assets.

This document explains how to run the project locally, outlines the directory structure, and highlights the core features of the application.

---

## Core Features

- Browse, search, and filter travel listings by keyword, location, category, and price range
- User authentication and authorization with role-based access for users and administrators
- Persistent data storage using MongoDB
- Image upload and cloud-based storage support
- Server-side rendered user interface using EJS templates

---

## Technology Stack

- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose ODM
- Templating Engine: EJS (server-side rendering)
- Authentication: Passport.js
- Styling: CSS and Bootstrap
- File & Image Handling: Cloud-based storage configuration

---

## Project Structure (Top Level)

controllers/ Application controllers (business logic)

init/ Database initialization and seed scripts

models/ Mongoose schemas and models

public/ Static assets (CSS, JavaScript, images)

routes/ Express route definitions

utils/ Helper utilities and shared modules

views/ EJS templates (server-rendered views)

ListingSchema.js Additional listing schema

app.js Application entry point

cloudConfig.js Cloud and image storage configuration

package.json Project dependencies and scripts

.gitignore Ignored files and directories

---

## Prerequisites

Before running the project, ensure the following are installed and configured:

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)
- MongoDB (local installation or MongoDB Atlas)
- Valid cloud service credentials required by cloudConfig.js

---

## Local Setup and Running the Project

### Step 1: Clone the Repository

Clone the repository and navigate into the project directory:

```
git clone https://github.com/psucho924/WanderStay.git
cd WanderStay
```

---

### Step 2: Install Dependencies

```
npm install
```

---

### Step 3: Configure Environment Variables

Create a `.env` file in the project root directory and add the following variables:

```
MONGODB_URI=your_mongodb_connection_string
PORT=8080
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
SESSION_SECRET=your_session_secret
NODE_ENV=development
```

---

### Step 4: Initialize Sample Data (Optional but Recommended)

To populate the database with sample listings and a default user, run:

```
node init/index.js
```

This script will:

- Create a sample user
- Assign that user as the owner of all sample listings
- Insert listings with valid categories and relationships

---

### Step 5: Start the Application

```
node app.js
```

---

### Step 6: Open in Browser

Access the application in your browser at:

```
http://localhost:8080
```

---

## Application Status

WanderStay should now be running locally. You can explore listings, test authentication workflows, and interact with the complete server-rendered application.

---

## Production Notes

- The application uses server-side rendering (SSR) with EJS.
- All sensitive credentials are managed via environment variables.
- Sessions are stored in MongoDB using connect-mongo.
- Ensure MongoDB Atlas allows external connections when deploying.
- Do not commit `.env` files to version control.

---

## Notes

- This project uses server-side rendering (SSR) with EJS and does not rely on a client-side SPA framework.
- Cloud credentials must be valid for image upload and storage features to function correctly.
- Environment variables should never be committed to version control.

---

## License

This project is intended for educational and development purposes.

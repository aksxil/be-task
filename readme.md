Menu Management System
A Node.js backend application for managing menu categories, subcategories, and items. This project demonstrates the CRUD operations for a hierarchical structure with proper API endpoints, focusing on scalability and flexibility.

Features
Category Management: Create, read, update, and delete categories.
Subcategory Management: Create, read, update, and delete subcategories under categories.
Item Management: Create, read, update, and delete items under categories or subcategories.
Search: Search items by their name.
Prerequisites
Make sure you have the following installed on your system:

Node.js (version 18.16.0 or higher recommended)
MongoDB (local or cloud-based MongoDB cluster)
Installation Instructions
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/menu-management-system.git
cd menu-management-system
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file in the root directory and add the following environment variables:

makefile
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000
Start the server:

bash
Copy
Edit
npm start
Use Postman or any other API client to test the endpoints.

Testing the APIs
Postman Base URL
Base URL: http://localhost:5000/api
Example Endpoints:
Create Category: POST /categories
Get All Categories: GET /categories
Create Subcategory: POST /subcategories/:categoryId
Search Items: GET /items/search/:name

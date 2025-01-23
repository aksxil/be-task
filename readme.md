# Menu Management System

A Node.js backend application for managing menu categories, subcategories, and items. This project demonstrates the CRUD operations for a hierarchical structure with proper API endpoints, focusing on scalability and flexibility.  

---

## Features
- **Category Management**: Create, read, update, and delete categories.  
- **Subcategory Management**: Create, read, update, and delete subcategories under categories.  
- **Item Management**: Create, read, update, and delete items under categories or subcategories.  
- **Search**: Search items by their name.  

---

## Prerequisites
Make sure you have the following installed on your system:  
- [Node.js](https://nodejs.org/) (version 18.16.0 or higher recommended)  
- [MongoDB](https://www.mongodb.com/) (local or cloud-based MongoDB cluster)  

---

## Installation Instructions
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/menu-management-system.git
   cd menu-management-system
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file in the root directory and add the following environment variables:

env
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
Refer to the full documentation for detailed API usage.

Answers to the Questions
1. Which database have you chosen and why?
Database: MongoDB
Reason: MongoDB is a NoSQL database, well-suited for hierarchical data structures like categories, subcategories, and items. Its schema flexibility, scalability, and ease of use make it ideal for this assignment.

2. Three things you learned from this assignment:
Designing and implementing a hierarchical data structure in a database.
Building clean and modular APIs with Node.js and Express.js.
Importance of input validation and error handling using libraries like Joi.
3. What was the most difficult part of the assignment?
The most challenging part was managing the relationships between categories, subcategories, and items in the database. Ensuring that subcategories and items were correctly associated with their parent categories required careful database modeling and query design.

4. What would you have done differently given more time?
Implemented pagination for GET endpoints to handle large datasets efficiently.
Added user authentication and authorization to secure the APIs.
Used automated testing frameworks like Jest for end-to-end API testing.
Technologies Used
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Tools: Postman for API testing

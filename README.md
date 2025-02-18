# MERN E-Commerce Application

Welcome to the MERN E-Commerce Application! This project is a simple e-commerce application built using the MERN stack (MongoDB, Express, React, Node.js).

## Features

- User-friendly interface for browsing products
- Add, update, and delete products
- Responsive design using Chakra UI
- Image handling with URLs
- State management with Zustand

## Technologies Used

- MongoDB
- Express
- React
- Node.js
- Chakra UI
- Zustand

## Installation

1.Clone the repository:

git clone https://github.com/your-username/mern-ecom.git

2.Navigate to the project directory:

cd mern-ecom

3.Install dependencies for both the frontend and backend:

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

4.Create a .env file in the backend directory and add the following environment variables:

MONGO_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development


Running the Application

1.Start the backend server:

cd backend
npm start

2.Start the frontend development server:

cd ../frontend
npm start

3.Open your browser and navigate to http://localhost:5000.

Project Structure
mern-ecom/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── ProductCard.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── CreatePage.jsx
│   │   ├── store/
│   │   │   └── product.js
│   │   ├── App.jsx
│   │   ├── index.js
│   └── .env
├── README.md


Usage
Home Page: Displays a list of products. If no products are available, a message is shown with a link to create a new product.
Create Page: Allows users to add a new product by providing the product name, price, and image URL.
Navbar: Contains icons for navigating to the home page and the create page.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
Chakra UI
Zustand
Unsplash
Lorem Picsum
Placeholder.com

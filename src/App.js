import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import { Container, Navbar, Nav } from 'react-bootstrap';
import spaghettiImg from './assets/spaghetti.jpg';
import chickenCurryImg from './assets/chicken-curry.jpg';

const App = () => {
    const [recipes, setRecipes] = useState([
        {
            title: 'Spaghetti Carbonara',
            shortDescription: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
            ingredients: ['Spaghetti', 'Eggs', 'Cheese', 'Pancetta', 'Pepper'],
            preparationSteps: '1. Boil pasta. 2. Cook pancetta. 3. Mix eggs and cheese. 4. Combine all with pepper.',
            picture: spaghettiImg,
        },
        {
            title: 'Chicken Curry',
            shortDescription: 'A flavorful Indian curry made with chicken, spices, tomatoes, and cream.',
            ingredients: ['Chicken', 'Spices', 'Tomatoes', 'Cream'],
            preparationSteps: '1. Cook chicken. 2. Add spices. 3. Add tomatoes and cream. 4. Simmer.',
            picture: chickenCurryImg,
        },
        // Add more recipes here

        {
            title: 'Beef Curry',
            shortDescription: 'beef curry and serve with a hunk of naan bread to mop up the delicious juices. If you prefer it less spicy, simply add less chilli powder',
            ingredients: ['2 tbsp oil', '500g diced braising steak', '1 tbsp butter', '1 large onion, chopped',' 2 garlic cloves, crushed'    ],
            preparationSteps: '1. Cook chicken. 2. Add spices. 3. Add tomatoes and cream. 4. Simmer.',
            picture: chickenCurryImg,
        },




    ]);

    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Recipe Book</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container className="mt-4">
                <Routes>
                    <Route path="/" element={<RecipeList recipes={recipes} />} />
                    <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;

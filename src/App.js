import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import { Container, Navbar, Nav } from 'react-bootstrap';
import spaghettiImg from './assets/spaghetti.jpg';
import chickenCurryImg from './assets/chicken-curry.jpg';
import beefCurryImg from './assets/beef-curry.jpg'
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
            shortDescription: 'Beef curry and serve with rice to mop up the delicious juices.',
            ingredients: ['2 tbsp oil', '500g diced braising steak', '1 tbsp butter', '1 large onion, chopped',' 2 garlic cloves, crushed', '1 thumb sized piece of ginger must be finely grated', '¼ tsp hot Chili Powder', '1 tsp turmeric', '2 tsp ground coriander', '3 cardamom pods, crushed', '300ml beef stock', '1 tsp sugar', '½ small bunch coriander, roughly chopped', 'naan bread or rice, to serve'],
            preparationSteps: '1. Heat 2 tbsp oil in a pot. Add 500g diced braising steak and cook until browned.  2. Add 1 chopped large onion, 2 crushed garlic cloves, and 1 thumb-sized piece of finely grated ginger. 3.Cook until fragrant. Add ¼ tsp hot chili powder, 1 tsp turmeric, 2 tsp ground coriander, and 3 crushed cardamom pods. Stir well. 4. Add 300ml beef stock. Stir in 1 tsp sugar. 5. Bring to a boil, then reduce heat and simmer for 1.5 hours, or until beef is tender. 6. Serve hot with rice. ',
            picture: beefCurryImg,
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

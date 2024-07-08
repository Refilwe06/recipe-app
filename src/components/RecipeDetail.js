import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Container, ListGroup } from 'react-bootstrap';

const RecipeDetail = ({ recipes }) => {
    const { id } = useParams();
    const recipe = recipes[id];
    const navigate = useNavigate();

    return (
        <Container>
            <Card>
                <Card.Img variant="top" src={recipe.picture} className="card-img-top" />
                <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <Card.Text>{recipe.shortDescription}</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Ingredients</Card.Subtitle>
                    <ListGroup variant="flush">
                        {recipe.ingredients.map((ingredient, index) => (
                            <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Card.Subtitle className="mt-3 mb-2 text-muted">Preparation Steps</Card.Subtitle>
                    <Card.Text>{recipe.preparationSteps}</Card.Text>
                    <Button variant="secondary" onClick={() => navigate('/')}>
                        Back to List
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default RecipeDetail;

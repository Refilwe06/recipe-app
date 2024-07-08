import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';

const RecipeList = ({ recipes }) => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {recipes.map((recipe, index) => (
                <Col key={index}>
                    <Card>
                        <Card.Img variant="top" src={recipe.picture} className="card-img-top" />
                        <Card.Body>
                            <Card.Title>{recipe.title}</Card.Title>
                            <Card.Text>{recipe.shortDescription}</Card.Text>
                            <Button as={Link} to={`/recipe/${index}`} variant="primary">
                                View Details
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default RecipeList;

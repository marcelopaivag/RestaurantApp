import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import dishes from '../assets/japDishes';
import { Link } from 'react-router-dom';

const Dishes = () => {
  console.log(dishes)
  return (
    <Row xs={1} sm={2} md={3} lg={4} xl={4} className="g-4">
      {dishes.map((dish) => (
        <Col key={dish.id}>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={dish.image} />
            <Card.Body>
              <Card.Title>{dish.title}</Card.Title>
              <Card.Text>{dish.price}</Card.Text>
              <Link to={`/RestaurantApp/menu/${dish.id}`}>
                <Button variant="primary">Ver más</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Dishes;

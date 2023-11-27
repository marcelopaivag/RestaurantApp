import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const PlatoIndividual = ({ id, title, image, description, price }) => {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={image} alt={title} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>Precio: ${price}</Card.Text>
              <Button variant="primary">Agregar al Carrito</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PlatoIndividual;

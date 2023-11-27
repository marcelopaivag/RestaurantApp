import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import platosJaponeses from '../assets/japDishes';

const PaginaPlatoIndividual = () => {
  const { id } = useParams();
  const plato = platosJaponeses.find(plato => plato.id === parseInt(id));

  if (!plato) {
    return <div>No se encontró el plato.</div>;
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src={plato.image} alt={plato.title} />
            <Card.Body>
              <Card.Title>{plato.title}</Card.Title>
              <Card.Text>{plato.description}</Card.Text>
              <Card.Text>Precio: ${plato.price.toFixed(2)}</Card.Text>
              <Button variant="primary">Pedir por Delivery</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PaginaPlatoIndividual;

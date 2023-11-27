import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import platosJaponeses from '../assets/japDishes';

const CatalogoPlatos = () => {
  return (
    <Container className="mt-4">
      <h1 className='text-center p-4'>Nuestra Carta</h1>
      <Row>
        {platosJaponeses.map((plato) => (
          <Col key={plato.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="mb-4">
              <Link to={`/plato/${plato.id}`}>
                <Card.Img variant="top" src={plato.image} alt={plato.title} />
              </Link>
              <Card.Body>
                <Card.Title>{plato.title}</Card.Title>
                <Card.Text>{plato.description}</Card.Text>
                <Card.Text>Precio: ${plato.price.toFixed(2)}</Card.Text>
                <Link to={`/plato/${plato.id}`}>
                  <Button variant="primary">Ver Detalles</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CatalogoPlatos;

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from "react-router-dom";
import dishes from "../assets/japDishes";

const DishDetail = () => {
  const { id } = useParams();
  const dish = dishes.find((dish) => dish.id === parseInt(id, 10));

  if (!dish) {
    return <div>No se encontró el plato</div>;
  }

  return (
    <Card style={{ width: '100%' }}>
      <h1 className='p-4 text-center'>{dish.title}</h1>
      <Card.Img variant="top" src={dish.image} />
      <Card.Body>
        <Card.Text>{dish.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{dish.price} usd</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Agregar al carrito</Card.Link>
        <Card.Link href="#">Comprar ahora!</Card.Link>
      </Card.Body>
    </Card>);
};

export default DishDetail;

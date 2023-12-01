import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <img
          src='https://res.cloudinary.com/dbteftlej/image/upload/v1701101583/13_ezgfov.png'
          height={150} />
        <Container>
          <Navbar.Brand as={Link} to='/RestaurantApp/'>Bad Bones Ramen</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/RestaurantApp/'>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/RestaurantApp/menu'>Carta</Nav.Link>
            <Nav.Link as={Link} to='/RestaurantApp/bookings'>Reservas</Nav.Link>
            <Nav.Link as={Link} to='/RestaurantApp/contact'>Contacto</Nav.Link>
            <Nav.Link as={Link} to='/RestaurantApp/blog'>Blog</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
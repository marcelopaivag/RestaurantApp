import { Container, Row, Col } from 'react-bootstrap'

export const Footer = () => {
    return (
        <>
            <Container fluid className='bg-light text-dark py-4'>
                <Row>
                    <Col className='ms-2'>
                        <img 
                        src='https://res.cloudinary.com/dbteftlej/image/upload/v1701101583/13_ezgfov.png' 
                        width={350} />
                    </Col>
                    <Col>
                        <h5>Japanese Food</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Home</a></li>
                            <li><a href="#!">Carta</a></li>
                            <li><a href="#!">Reserva tu mesa</a></li>
                            <li><a href="#!">Contacto</a></li>
                            <li><a href="#!">Blog</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <h5>Contacto</h5>
                        <ul className="list-unstyled">
                            <li>Av. Las Condes #12342523 - Local 1B. Las Condes - Santiago.</li>
                            <li>contacto@contacto.cl</li>
                            <li>+ 01 234 567 88</li>
                            <li>+ 01 234 567 89</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col className="text-center">
                        © {new Date().getFullYear()} Copyright: OMTpaiva
                    </Col>
                </Row>
            </Container>
        </>
    )
}

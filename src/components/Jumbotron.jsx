import Carousel from 'react-bootstrap/Carousel';

export const Jumbotron = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://res.cloudinary.com/dbteftlej/image/upload/v1701100987/2_bvfl2n.jpg'
                    alt="First slide"
                    height={800}
                />
                <Carousel.Caption className='badge bg-dark text-wrap'>
                    <h2>Expertos en Ramen</h2>
                    <h6>Ven y deleitate con la gastronomia japonesa.</h6>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://res.cloudinary.com/dbteftlej/image/upload/v1701100986/1_n2ljdh.jpg'
                    alt="Second slide"
                    height={800}
                />
                <Carousel.Caption className='badge bg-dark text-wrap'>
                    <h2>Bad Bones</h2>
                    <h6>Ramen Factory.</h6>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://res.cloudinary.com/dbteftlej/image/upload/v1701100977/7_uuiil6.jpg'
                    alt="Third slide"
                    height={800}
                />
                <Carousel.Caption className='badge bg-dark text-wrap'>
                    <h2>RamenManía</h2>
                    <h6>El ramen es un plato japonés de fideos que ha ganado popularidad en todo el mundo.</h6>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

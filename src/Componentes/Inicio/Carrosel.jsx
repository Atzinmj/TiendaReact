import Carousel from 'react-bootstrap/Carousel';
import imagen2 from '../images/camisa1.png';
import imagen1 from '../images/camisa2.png';
import imagen3 from '../images/PANTALON3.png';

export const Carru = () => {
    return (
        <div>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className='p-5 text-center bg-image'
                        style={{ backgroundImage: "src('imagen1')", height: 250, width: 500 }}
                        src={imagen1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>TIENDA DE ROPA </h5>
                        <p>SOMOS UNA PEQUEÑA FUNDACION QUE VENDE ROPA A LOS MEJORES PRECIOS </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='p-5 text-center bg-image'
                        style={{ backgroundImage: "src('imagen1')", height: 250, width: 500 }}
                        src={imagen2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5 className='text-danger'>BIENVENIDOS A CUIDADO CON EL GUAGUAU </h5>
                        <p className='text-warning'>TIENDA DONDE PODRAS ADQUIRIR GRAN VARIEDAD DE PRENDAS</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='p-5 text-center bg-image'
                        style={{ backgroundImage: "src('imagen1')", height: 250, width: 500 }}
                        src={imagen3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>CONSIGUE TUS PRENDAS AHORA</h5>
                        <p>NO TE PIERDAS ESTA OPORTUNIDAD</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
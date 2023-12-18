import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Libreria Importada

// Importacion de La BarraNavar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Libreria para Importar Iconos de tipo solidos c:
import { faShirt, faAddressCard, faShop, faHouse } from '@fortawesome/free-solid-svg-icons'; //Iconos Declaradps 

//Libreria para Importar iconos de Marcas 



export const Barra = () => {
    return (

        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand><FontAwesomeIcon icon={faShirt} /> Cuidado con el Guaguau </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link ><Link to="/" ><FontAwesomeIcon icon={faHouse} />  Inicio</Link></Nav.Link>
                        <Nav.Link><Link to="/Tienda"> <FontAwesomeIcon icon={faShop} /> Productos </Link></Nav.Link>
                        <NavDropdown title="Conocenos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.youtube.com/@marquezjaraatzin3243">Facebook</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Instagram
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">X</NavDropdown.Item>
                        </NavDropdown>
                        <Link to="/Login" ><button className="btn btn-primary dropdown-toggle" ><FontAwesomeIcon icon={faAddressCard} />  Iniciar Sesión</button> </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )


}
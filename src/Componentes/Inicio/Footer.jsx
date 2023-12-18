import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBBtn
} from 'mdb-react-ui-kit';
//Iconos tipo Marca
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Libreria Importada
// Libreria para Importar Iconos de tipo solidos c:
import { faFacebook, faGithub, faLinkedin, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons'; //Iconos Declaradps
//Iconos de tipo Solido



export const  Footer =() => {
    return (
        <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
            <MDBContainer className='pt-4'>
                <section className='mb-4'>
                    <MDBBtn
                        rippleColor="dark"
                        color='link'
                        floating
                        size="lg"
                        className='text-dark m-1'
                        href='#!'
                        role='button'
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </MDBBtn>

                    <MDBBtn
                        rippleColor="dark"
                        color='link'
                        floating
                        size="lg"
                        className='text-dark m-1'
                        href='#!'
                        role='button'
                    >
                        <FontAwesomeIcon icon={faUser} />
                    </MDBBtn>

                    <MDBBtn
                        rippleColor="dark"
                        color='link'
                        floating
                        size="lg"
                        className='text-dark m-1'
                        href='#!'
                        role='button'
                    >

                        <FontAwesomeIcon icon={faBootstrap} />
                    </MDBBtn>

                    <MDBBtn
                        rippleColor="dark"
                        color='link'
                        floating
                        size="lg"
                        className='text-dark m-1'
                        href='#!'
                        role='button'
                    >
                    
                    </MDBBtn>

                    <MDBBtn
                        rippleColor="dark"
                        color='link'
                        floating
                        size="lg"
                        className='text-dark m-1'
                        href='#!'
                        role='button'
                    >
                        <FontAwesomeIcon icon={faLinkedin} />

                    </MDBBtn>

                    <MDBBtn
                        rippleColor="dark"
                        color='link'
                        floating
                        size="lg"
                        className='text-dark m-1'
                        href='#!'
                        role='button'
                    >
                        <FontAwesomeIcon icon={faGithub} />

                    </MDBBtn>
                </section>
            </MDBContainer>

            <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright:
                <a className='text-dark' href='/'>
                CUIDADO CON EL GUAGUAU.
                </a>
            </div>
        </MDBFooter>
    )
}

import React from "react";
import './style.css'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Libreria Importada

// Libreria para Importar Iconos de tipo solidos c:
import { faEnvelope, faKey, faReply } from '@fortawesome/free-solid-svg-icons'; //Iconos Declaradps 

import { useState } from "react";
import Axios from "axios";

export const Login = () => {
    const [Correo, setCorreo] = useState("");
    const [Contra, setContra] = useState("");

    const Buscar = () => {
        Axios.post("http://localhost:3001/Ingresar", {
            Correo: Correo,
            Contra: Contra
        }).then(() => {
            alert("Bienvenido Usuario ");

        });
    }


    return (
        <div>

            <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
                <div className="form_container p-5 rounded bg-white">
                    <form>
                        <h3 className="text-center">Iniciar Sesión</h3>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faEnvelope} /> </span>
                            <input type="text" value={Correo}
                                onChange={(event) => {
                                    setCorreo(event.target.value);
                                }}
                                className="form-control" placeholder="Correo" aria-label="Correo" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faKey} /> </span>
                            <input type="password" value={Contra}
                                onChange={(event) => {
                                    setContra(event.target.value);
                                }}
                                placeholder="Ingresa Contraseña" className="form-control"></input>
                        </div>

                        <div className="mb-2">
                            <input type="checkbox" className="custom-control custom-checkboc" id="check"></input>
                            <label htmlFor="check" className="custom-input-label ms-2">
                                Recordarme
                            </label>
                        </div>
                        <div className="d-grid">
                            <Link to ="/" className="btn btn-primary" onClick={Buscar}>Ingresar</Link>
                        </div>
                        <br />
                        <div className="btn btn-primary btn-sm ">
                            <Link to="/" className="btn btn-primary"><FontAwesomeIcon icon={faReply} /></Link>
                        </div>
                        <p className="text-end mt-2">
                            Olvido <a >Contraseña?</a><Link to="/Registro" className="ms-2" >Registrarse</Link>
                        </p>

                    </form>


                </div>





            </div>
        </div>



    )



}


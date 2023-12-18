import React from "react";
import './style.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Libreria Importada


import { useState } from "react";
import Axios from "axios";
// Libreria para Importar Iconos de tipo solidos c:
import { faEnvelope, faKey, faUser, faClipboard, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'; //Iconos Declaradps 


export const Registro = () => {
    const [Nombre, setNombre] = useState("");
    const [Telefono, setTelefono] = useState("");
    const [Direccion, setDireccion] = useState("");
    const [Usuario, setUsuario] = useState("");
    const [Correo, setCorreo] = useState("");
    const [Contra, setContra] = useState("");

    const add = () => {
        Axios.post("http://localhost:3001/Insert", {
            Nombre: Nombre,
            Telefono: Telefono,
            Direccion: Direccion,
            Usuario: Usuario,
            Correo: Correo,
            Contra: Contra
        }).then(() => {
            alert("Registro Exitoso");
    
        });
    }




    return (
        <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className="form_container p-5 rounded bg-white">
                <form>
                    <h3 className="text-center">Registro</h3>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faClipboard} /> </span>
                        <input type="text" value={Nombre}
                            onChange={(event) => {
                                setNombre(event.target.value);
                            }}
                            className="form-control" placeholder="Nombre" aria-label="Nombre" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faPhone} /> </span>
                        <input type="text" value={Telefono}
                            onChange={(event) => {
                                setTelefono(event.target.value);
                            }}
                            className="form-control" placeholder="Telefono" aria-label="Telefono " aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faLocationDot} /> </span>
                        <input type="text" value={Direccion}
                            onChange={(event) => {
                                setDireccion(event.target.value);
                            }}
                            className="form-control" placeholder="Direccion" aria-label="Direccion " aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faEnvelope} /> </span>
                        <input type="text" value={Correo}
                            onChange={(event) => {
                                setCorreo(event.target.value);
                            }}
                            className="form-control" placeholder="Correo" aria-label="Correo" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUser} /> </span>
                        <input type="text" value={Usuario}
                            onChange={(event) => {
                                setUsuario(event.target.value);
                            }}
                            className="form-control" placeholder="Usuario" aria-label="Ususario" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faKey} /> </span>
                        <input type="password" value={Contra}
                            onChange={(event) => {
                                setContra(event.target.value);
                            }}
                            className="form-control" placeholder="Contraseña" aria-label="Contraseña" aria-describedby="basic-addon1" />
                    </div>

                    <div className="d-grid">
                        <Link to = "/Login" className="btn btn-primary" onClick={add}>Registrarme</Link>
                    </div>
                    <p className="text-end mt-2">
                        <Link to="/Login" className="ms-2" >Ya tengo Cuenta</Link>
                    </p>

                </form>


            </div>





        </div>




    )



}
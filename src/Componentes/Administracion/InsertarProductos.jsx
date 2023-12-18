import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Libreria Importada

import { faComment, faCopyright, faPerson, faMoneyBillWave, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Axios from "axios";


export const InsertarP = () => {
// variables para insertar los datos 
            const [Producto,setProducto] = useState("");
            const [Marca,setMarca] = useState("");
            const [Talla,setTalla] = useState("");
            const [Precio,setPrecio] = useState("");
            const [Cantidad,setCantidad] = useState("");
            const [IMG,setIMG] = useState("");
// consulta de la base de datos 
            const ProductoAdd = () => {
                Axios.post("http://localhost:3001/InsertP", {
                    Producto: Producto,
                    Marca: Marca,
                    Talla: Talla,
                    Precio: Precio,
                    Cantidad: Cantidad,
                    IMG: IMG
                }).then(() => {
                    alert("Registro Exitoso");
        
                });
            }

    return (
        <div className="login d-flex justify-content-center  vh-50">
            <div className="form_container p-5 rounded bg-warning">
                <form>
                    <h3 className="text-center">Ingresar Productos</h3>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faComment} /></span>
                        <input type="text" value={Producto}
                            onChange={(event) => {
                                setProducto(event.target.value);
                            }}
                            className="form-control" placeholder="Nombre Productos" aria-label="Nombre" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faCopyright} /></span>
                        <input type="text" value={Marca}
                            onChange={(event) => {
                                setMarca(event.target.value);
                            }}
                            className="form-control" placeholder="Marca" aria-label="Telefono " aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faPerson} /> </span>
                        <input type="text" value={Talla}
                            onChange={(event) => {
                                setTalla(event.target.value);
                            }}
                            className="form-control" placeholder="Talla" aria-label="Direccion " aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faMoneyBillWave} /></span>
                        <input type="text" value={Precio}
                            onChange={(event) => {
                                setPrecio(event.target.value);
                            }}
                            className="form-control" placeholder="Precio" aria-label="Correo" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faBoxOpen} /></span>
                        <input type="text" value={Cantidad}
                            onChange={(event) => {
                                setCantidad(event.target.value);
                            }}
                            className="form-control" placeholder="Cantidad" aria-label="Ususario" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faBoxOpen} /></span>
                        <input type="text" value={IMG}
                            onChange={(event) => {
                                setIMG(event.target.value);
                            }}
                            className="form-control" placeholder="Imagen URL" aria-label="Ususario" aria-describedby="basic-addon1" />
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary" onClick={ProductoAdd} >Registrar Producto</button>
                    </div>

                </form>


            </div>





        </div>


    );
}


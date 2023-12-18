import React from 'react'
import Axios from "axios";
import { useState } from "react";


export const Tablas = () => {
    const [registroList, setRegistro] = useState([]);

// se le pide al servidor la vizualizacion de la tabla Productos
    const getRegistro = () => {
        Axios.get("http://localhost:3001/vizualizarP").then((response) => {

            setRegistro(response.data);
        });
    }
    return (
        <div>
            <h3 className="text-center">Tabla Productos</h3>
            <table class="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID_Productos </th>
                        <th scope="col">Nombre Producto</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Talla</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                    </tr>
                </thead>
                {


registroList.map((val) => {

    return (

                            <tr >
                                <td  >{val.id }</td>
                                <td>{val.name}</td>
                                <td>{val.Marca}</td>
                                <td>{val.Talla}</td>
                                <td> {val.price}</td>
                                <td> {val.Cantidad}</td>



                            </tr>



                        )
                    })
                }

            </table>




            <button className='btn btn-info' onClick={getRegistro}>Visualizar</button>
        </div>
    )
}
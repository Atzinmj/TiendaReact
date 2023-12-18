import React from 'react'
import Axios from "axios";
import { useState } from "react";


export const TablaClientes = () => {


    const [registroList, setRegistro] = useState([]);

// se le pide al servidor la vizualizacion de la tabla clientes
    const getRegistro = () => {
        Axios.get("http://localhost:3001/vizualizarC").then((response) => {

            setRegistro(response.data);
        });
    }




    return (
        <div>
            <h3 className="text-center">Tabla Clientes</h3>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Correo</th>



                    </tr>
                </thead>

                {


registroList.map((val) => {

    return (

                            <tr >
                                <td  >{val.ID_Cliente}</td>
                                <td>{val.NombreClient}</td>
                                <td>{val.Telefono}</td>
                                <td>{val.Direccion}</td>
                                <td> {val.Usuario}</td>
                                <td> {val.Correo}</td>



                            </tr>



                        )
                    })
                }

            </table>




            <button className='btn btn-info' onClick={getRegistro}>Visualizar</button>
        </div>
    )
}


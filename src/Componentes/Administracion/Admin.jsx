import React from 'react';


//Importacion de los componentes que conforman la pagina del administrador
import { Tablas } from "./TablaProductos";
import { TablaClientes } from "./TablaClientes";
import { InsertarP } from './InsertarProductos';




export const Admin = () => {
    return (

        <div>
            <div className='navbar navbar-dark bg-dark'>

            </div>

            <div className='container'>


            </div>
            <InsertarP />

            <div>
                <div className='container d-flex justify-content-center align-items-center h-100'>
                    <Tablas> </Tablas>
                    <div className='container d-flex justify-content-center align-items-center h-100'>
                        <TablaClientes> </TablaClientes>
                    </div>
                </div>


            </div>
        </div>

    )
}

import React from 'react'

import imagen2 from '../images/sueter1.jpg';
import imagen1 from '../images/sueter2.jpg';
import imagen3 from '../images/pantalon1.jpg';
import imagen4 from '../images/camisa2.jpg';

import { Link } from 'react-router-dom';
export const Cuerpo = () => {
    return (

        <div className="row">
            <p className="h1 fs-1  font-weight-bold text-center text-dark  text-fond">
                    Productos De La Semana
                </p>
            <div className="col-md-3">
                <div className="card" >
                <img
                    className='p-5 text-center bg-image'
                    style={{ backgroundImage: "src('imagen1')", height: 250, width: 250 }}
                    src={imagen1}
                    alt="Second slide"
                />
                        <div className="card-body">
                            <h5 className="card-title">Dragon Ball Chamarra</h5>
                            <p className="card-text">Chamarra de Promocion</p>
                        </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card" >
                <img
                    className='p-5 text-center bg-image'
                    style={{ backgroundImage: "src('imagen1')", height: 250, width: 250 }}
                    src={imagen2}
                    alt="Second slide"
                />
                        <div className="card-body">
                            <h5 className="card-title">Chamarra</h5>
                            <p className="card-text">Promocion 50%</p>
                        
                        </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card" >
                <img
                    className='p-5 text-center bg-image'
                    style={{ backgroundImage: "src('imagen1')", height: 250, width: 250 }}
                    src={imagen3}
                    alt="Second slide"
                />
                        <div className="card-body">
                            <h5 className="card-title">Pantalon</h5>
                            <p className="card-text">Promocion 25%</p>
                        
                        </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card" >
                <img
                    className='p-5 text-center bg-image'
                    style={{ backgroundImage: "src('imagen1')", height: 250, width: 250 }}
                    src={imagen4}
                    alt="Second slide"
                />
                        <div className="card-body">
                            <h5 className="card-title">Camisa</h5>
                            <p className="card-text">Promocion 35%</p>
                        
                        </div>
                </div>
            </div>
            <div className="container text-center  ">
        
            <Link to = "/Tienda" className="btn btn-secondary btn-lg btn-block p-2"> Ir a Productos</Link>

            </div>
                <div className="container">
                    <p className="fs-1 text-center text-success">
                        Bienvenido a la mejor Tienda de Ropa
                    </p>
                    <p className=" font-weight-bold text-center ">
                        Donde encontraras los mejores Productos de Zona Centro
                    </p>

                </div>
            </div>

    
    )
}

import React from "react";
//import { Link } from 'react-router-dom';


// importaciones de los funciones que componen al landing
import { Cuerpo } from "./Cuerpo";
import { Barra } from "./BarraNav";
import { Carru } from "./Carrosel";
import { Footer } from "./Footer";


export const Inicio = () => {
    return (
        <div>
            <div>
                <Barra></Barra>
                <div className="container-sm">
                    <Carru></Carru>
                </div>
                <div class="container">
                </div>
                <Cuerpo />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>

    )



}

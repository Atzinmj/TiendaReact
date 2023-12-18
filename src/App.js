import React from "react";
import { ItemList } from "./components/ItemList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./components/ShoppingCart";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { Inicio } from "./Componentes/Inicio/Landing";
import { Registro } from "./Componentes/Inicio/Registro";
import { Login } from "./Componentes/Inicio/Login";
import { Admin } from "./Componentes/Administracion/Admin";
import { InsertarP } from "./Componentes/Administracion/InsertarProductos";

//paGINA de PAYPAL




export const App = () => {

  // este return crea la paginacion del proyecto por medio de Route 
  return (
  <div className="FondoInicio">
    <ShoppingCartProvider>
      <Router>
        <Routes>
  
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/Landing" element={<Inicio />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Registro" element={<Registro />} />
          <Route exact path="/Admin" element={<Admin />} />
          <Route exact path="/Insert" element={<InsertarP />} />
          <Route path="/Tienda" element={<ItemList />} />
          <Route path="/cart" element={<ShoppingCart />} />
        
        </Routes>
      </Router>
    </ShoppingCartProvider>
    </div>
  );
};

export default App;

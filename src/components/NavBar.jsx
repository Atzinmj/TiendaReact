import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog,faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const [cart, setCart] = useContext(CartContext);
// aumenta o reduce el nimero del carrito 
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
// estilo de la barra 
  const navStyles = {
    color: "#fff",
    listStyle: "none",
    textDecoration: "none",
  };

  return (
    <nav>
      <Link to={"/"} style={navStyles}>
        <h2>Cuidado Con el<FontAwesomeIcon icon={faDog} /></h2>
      </Link>
      <ul className="nav-list">
        <Link to={"/cart"} style={navStyles}>
          <li>
            Cart items: <span className="cart-count"><FontAwesomeIcon icon={faCartShopping} /> {quantity}</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

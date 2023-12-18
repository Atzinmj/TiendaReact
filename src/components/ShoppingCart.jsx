import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";


import ReactDOM from "react-dom"
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export const ShoppingCart = () => {
  const createOrder = (data, actions) => {
    return actions.order.create({
        purchase_units: [{
            amount: {
                value: totalPrice
            }
        }
        ]
    });
};
const onApprove = (data,actions) => {
    return actions.order.capture();
};

  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  return (
    <div className="cart-container">
      <div>
        <div>Productos en el Carro: {quantity}</div>
        <div>Total: ${totalPrice}</div>
        
      

        <PayPalButton
                createOrder={(data,actions) => createOrder(data,actions)}
                onApprove={(data,actions) => onApprove(data,actions)}
            />


      </div>
    </div>
  );
};

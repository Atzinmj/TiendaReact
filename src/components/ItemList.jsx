import React from "react";

import { Item } from "./Item";
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Navbar } from "./NavBar";

export const ItemList = () => {
  const [data, setData] = useState([]);
// le pide al servidor la tabla productos en formato json 
  useEffect(() => {
      const obtenerData = async () => {
          try {
              const respuesta = await axios.get('http://localhost:3001/vizualizarP');
              setData(respuesta.data);
          } catch (error) {
              console.error('Error al obtener los datos:', error);
          }
      };

      obtenerData();
  }, []);
// le manda a item la informacion del json
  return (
    <div> 
      <Navbar />
    <div className="items-list">
      {data.map((product, idx) => {
        return <Item key={product.id}{...product} />;
      })}
    </div>
    </div>
  );
};

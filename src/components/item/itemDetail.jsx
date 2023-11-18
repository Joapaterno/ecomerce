import "./item.css";
import React from "react";
import { useState, useEffect } from "react";


const ItemDetail = ({ producto }) => {
  const [contador, setContador] = useState(1);
  const [stock, setStock] = useState(20);


  useEffect(() => {
    stock === 0 && setContador(0);
  }, [stock]);
  const aumentar = () => {
    contador < stock && setContador(contador + 1);
  };
  const disminuir = () => {
    contador > 1 && setContador(contador - 1);
  };


  return (

    

    useEffect(() => {
      console.log(cartItems);
    }, [cartItems]),






    <div className="item-card">
      <div className="item-image-container">
        <img className="item-image" src={producto.image} alt={producto.title} />
      </div>
      <h3>{producto.title}</h3>
      <p>USD {producto.price}</p>
      <p>{producto.description}</p>
      <div>
        <p>stock:{stock}</p>
        <button onClick={disminuir}>-</button>
        <p>{contador}</p>
        <button onClick={aumentar}>+</button>
      </div>
      
        <button >agregar al carrito</button>
      
    </div>
  );
};

export default ItemDetail;
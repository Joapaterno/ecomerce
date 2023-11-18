import "./item.css";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartSlide";



const ItemDetail = ({ producto }) => {
  const [contador, setContador] = useState(1);
  const [stock, setStock] = useState(20);

  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();


  useEffect(() => {
    stock === 0 && setContador(0);
  }, [stock]);
  const aumentar = () => {
    contador < stock && setContador(contador + 1);
  };
  const disminuir = () => {
    contador > 1 && setContador(contador - 1);
  };

  const agregar = () => {

    const productorconcontadcor = {...producto, contador: contador}

    dispatch(addToCart(productorconcontadcor));
  }


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
      
        <button onClick={agregar}  >agregar al carrito</button>
      
    </div>
  );
};

export default ItemDetail;
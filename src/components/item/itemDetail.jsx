import "./item.css";
import React from "react";
import { useState, useEffect } from "react";
import { useShopContext } from "../shopContext/shopContext";
import Link from "antd/es/typography/Link";
import { db } from "../../firebase/client";
import { updateDoc, doc } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ producto }) => {
  const [contador, setContador] = useState(1);
  const [stock, setStock] = useState(20);

  const { addItem, cart, removeProduct, numProducts, setNumProducts } = useShopContext();

  const navigate = useNavigate();

  useEffect(() => {
    stock === 0 && setContador(0);
    console.log(producto)
  }, [stock]);
  const aumentar = () => {
    contador < stock && setContador(contador + 1);
  };
  const disminuir = () => {
    contador > 1 && setContador(contador - 1);
  };

  const onAdd = (product) => {

    const newProduct = {
      ...product, cantidad: contador
    };

    setNumProducts( numProducts + contador );


    addItem(newProduct)
  }



  return (
    <div className="item-card font-bold rounded-xl w-[700px] h-fit p-10 overflow-x-hidden flex flex-col items-center gap-2 bg-green-300 relative">

      <div className="absolute top-7 right-5 z-10" >
        
        <button onClick={()=> navigate("/products")} className="px-2 py-1 font-bold rounded-md border border-soli " >
          <h4 className="text-2xl" >Regresar</h4>
        </button>
        
      </div>



      <div className="item-image-container ">
        <img  className="item-image w-[200px]" src={producto.image} alt={producto.title} />
      </div>
      <h3>{producto.title}</h3>
      <p>USD {producto.price}</p>
      <p>{producto.description}</p>

      <div className="flex flex-col" >
        <p>stock:{producto.stock}</p>        
        <button onClick={disminuir}>-</button>
        <div className="flex justify-center" >
          <p className="text-xl" >{contador}</p>
        </div>
        <button onClick={aumentar}>+</button>
      </div>

      <button onClick={ ()=> onAdd(producto)  }  >agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;
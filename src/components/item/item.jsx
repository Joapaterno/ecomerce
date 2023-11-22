import React from "react";
import { Link } from "react-router-dom";
import style from "./item.css";


const ItemCard = ({ producto }) => {
  return (

    <div className="w-[300px] flex flex-col gap-2 items-center justify-center border border-solid border-b-lime-400 border-2 rounded-lg">

      <div className="item-image-container ">
        <img className="w-[200px]" src={producto.image} alt={producto.title} />
      </div>

      <h3>{producto.title}</h3>

      <p>USD {producto.price}</p>

      <Link to={`/item/${producto.id}`} className="custom-link">
        <button className="bg-green-400 px-2 rounded-md text-xl" >
          Ver Producto
        </button>
      </Link>

    </div>
  );
};

export default ItemCard;

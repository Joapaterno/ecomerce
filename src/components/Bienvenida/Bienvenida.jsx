import React from "react";
import { Link } from "react-router-dom";

const Bienvenida = () => {
  return (
    <div className="bienvenida-container flex flex-col h-screen items-center justify-center gap-10 ">
      <h1 className="bienvenida-text">Bienvenidos a Nuestra Tienda Online</h1>
      <Link to="/products">
        <button className="btn btn-dark bienvenida-button">
          Ver Productos
        </button>
      </Link>
    </div>
  );
};

export default Bienvenida;

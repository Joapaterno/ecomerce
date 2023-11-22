import React from "react";
import NavBar from "./components/navBar/navBar";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import Bienvenida from "./components/bienvenida/bienvenida";
import CartView from "./components/cartWidget/CartView";
import Practice1 from "./components/practice/Practice1";
import PracticeAlerts from "./components/practice/PracticeAlerts";
import PracticeToastify from "./components/practice/PracticeToastify";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/practice" element={<PracticeToastify />} />
        <Route path="/" element={<Bienvenida />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/products" element={<ItemListContainer />} />
        <Route
          path="/products/:nombreCategoria"
          element={<ItemListContainer />}
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

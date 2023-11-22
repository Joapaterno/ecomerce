import React, { createContext, useContext  ,useState } from "react";

const ShopContext = createContext();

export const ShopComponentContext = ({ children }) => {

  // estados
  const [numProducts, setNumProducts] = useState(0);
  const [cart, setCart] = useState([]);


  // funciones del estado
  const addItem = (item) => {

    if(cart.find( (i) => i.id === item.id )){
      const newCart = cart.map( (i) => {
        if(i.id === item.id){
          return {...i, cantidad: i.cantidad + item.cantidad}          
        }else{
          return i
        }
      })
      setCart(newCart)
      return
    }

    setCart([...cart, item])
    // addProduct(item.cantidad)
    console.log("adding item")
    console.log(cart)
  }

  const addProduct = (item) => {
    console.log(item)
    setNumProducts( numProducts + item.cantidad );
  }

  const removeProduct = () => {
    if (numProducts > 0) {
      setNumProducts( numProducts - 1 );      
    }
  }


  // exportando el contexto
  const test = {
    numProducts: numProducts,
    addProduct: addProduct,
    removeProduct: removeProduct,
    cart: cart,
    addItem: addItem,
    setNumProducts: setNumProducts,
  }


  return (
    <ShopContext.Provider value={ test }>
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => useContext(ShopContext);


export default ShopComponentContext;

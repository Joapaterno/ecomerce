import { createContext, useContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ( {children} ) => {

  const [cart, setCart] = useState([]);

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
    console.log("adding item")
    console.log(cart)
  }

  const test = "asdfasdf"

  const data = {
    cart,
    addItem,
    test
  }
  
  

  return (
    <CartContext.Provider value={data}>
      {children}
    </CartContext.Provider>
  )
};

export const useCart = () => {
  return useContext(CartContext);
}
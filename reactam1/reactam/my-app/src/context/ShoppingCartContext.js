import React, { createContext, useState, useEffect } from "react";
export const ShoppingCartContext = createContext({});
const initialCartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const ShoppingCartContextProvider = ({children}) => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return(
  <ShoppingCartContext.Provider value={{cartItems,setCartItems}}>
{children}

{/* <APP/> */}

</ShoppingCartContext.Provider>
);};


export default ShoppingCartContextProvider;
 

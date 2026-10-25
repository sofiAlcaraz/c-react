import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//creao contexto
const CartContext = createContext();
//custom hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartPorvider");
  }
  return context;
};
//provedor
export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  //returna true o false
  const isInCart = (item) => {
    const inCart = cart.some((element) => element.id === item.id);
    return inCart;
  };
  const addItem = (item) => {
    if (isInCart(item)) {
      alert("El producto ya existe en la funcion");
      return;
    }
    setCart([...cart, item]);
    alert("El producto fuie agregado al carrito");
  };

  const removeItem = (id) => {
    const updateCart = cart.filter((element) => element.id !== id);
    setCart(updateCart);
    alert("Producto eliminado");
  };
  const clearCart = () => {
    setCart([]);
  };
  const getTotalItems = () => {
    return cart.length;
  };
  const getCartTotal = () => {
    return cart.reduce((acc, element) => acc + element.price, 0);
  };
  const checkout = () => {
    alert("su compra se ha realizado cone exito");
    clearCart();
    navigate("/");
  };
  const values = {
    cart,
    getTotalItems,
    removeItem,
    addItem,
    checkout,
    getCartTotal,
    clearCart,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

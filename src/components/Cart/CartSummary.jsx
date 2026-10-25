import { useCart } from "../context/CartContext";

export const CartSummary = () => {
  const { getCartTotal, checkout } = useCart();
  const total = getCartTotal();
  //se puede agregar la cracion del usuario y todo de orders
  return (
    <>
      <p>Total a pagar: ${total}</p>
      <button onClick={() => checkout()}>Finalizar Compra</button>
    </>
  );
};

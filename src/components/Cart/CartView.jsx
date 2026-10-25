import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";

export const CartView = () => {
  const { cart } = useCart();
  return (
    <section className="cart-container">
      <h1>Tu carrito de compras</h1>
      {cart.length ? (
        <>
          <CartList />
          <CartSummary />
        </>
      ) : (
        <>
          <p>El carrito esta vacio</p>
          <Link to="/">Volver</Link>
        </>
      )}
    </section>
  );
};

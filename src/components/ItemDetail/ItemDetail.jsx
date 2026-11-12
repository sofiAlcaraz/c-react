import { useCart } from "../context/CartContext";
import Item from "../Item/Item";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  const { addItem } = useCart();
  return (
    <div className="detail-wrapper">
      <Item {...item}>
        <button onClick={() => addItem(item)} className="btn">
          Agregar al carrito
        </button>
      </Item>
    </div>
  );
};

export default ItemDetail;

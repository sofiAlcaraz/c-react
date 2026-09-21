import { Link } from "react-router-dom";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  if (!products) {
    return <p>no hay productos</p>;
  }
  return (
    <div className="products-container">
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <Item {...product} />
        </Link>
      ))}
    </div>
  );
};
export default ItemList;

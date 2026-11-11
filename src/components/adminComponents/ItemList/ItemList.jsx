import "./ItemList.css";
const ItemList = ({ products, onClickRemove, onClickEdit }) => {
  if (!products) {
    return <p>no hay productos</p>;
  }
  return (
    <ul className="products-list-container">
      {products.map((product) => (
        <li key={product.name} className="products-list-item">
          <p>{product.name}</p>
          <p>{product.id}</p>
          <div className="button-container">
            <button onClick={() => onClickEdit(product.id)}>Editar</button>
            <button onClick={() => onClickRemove(product.id)}>Eliminar</button>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default ItemList;

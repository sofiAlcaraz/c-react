import Item from "../Item/Item";

const ItemDetail = ({ item }) => {
  return (
    <div className="detail-wrapper">
      <Item {...item}>
        <button className="btn">Agregar al carrito</button>
      </Item>
    </div>
  );
};

export default ItemDetail;

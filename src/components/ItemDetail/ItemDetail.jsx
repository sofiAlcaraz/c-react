import Item from "../Item/Item";

const ItemDetail = ({ item }) => {
  return (
    <div className="detail-wrapper">
      <Item {...item}>
        <button onClick={() => console.log("Se agrego item!")} className="btn">
          Agregar al carrito
        </button>
      </Item>
    </div>
  );
};

export default ItemDetail;

import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/productsService";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //setLoading(true); ME TIRA UN ERROR :(
    //setError(null);
    //setItemDetail(null);

    getProductById(id)
      .then((data) => {
        setItemDetail(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!ItemDetail) return <p>Producto no encontrado</p>;

  return (
    <section>
      <h1>Detalle del Producto</h1>
      <div className="products-container">
        <ItemDetail item={itemDetail} />
      </div>
    </section>
  );
};

export default ItemDetailContainer;

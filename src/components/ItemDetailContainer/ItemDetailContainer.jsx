import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //pedir info con id
  useEffect(() => {
    //setItemDetail(null);
    //setLoading(true);
    //setError(null);

    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((product) => String(product.id) === id);
        if (item) {
          setItemDetail(item);
          return;
        }
        throw new Error("Elemento no encontrado");
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
      <div className="products-constainer">
        <ItemDetail item={itemDetail} />
      </div>
    </section>
  );
};

export default ItemDetailContainer;

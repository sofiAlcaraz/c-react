import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getByCategory } from "../../services/productsService";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getByCategory(category)
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>No se encontraron productos</p>;

  return (
    <section className="section-produsts-list">
      <h1>Productos</h1>
      <ItemList products={products} />
    </section>
  );
};
export default ItemListContainer;

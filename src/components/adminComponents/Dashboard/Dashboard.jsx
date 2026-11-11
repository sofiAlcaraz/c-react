import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Dashboard.css";
import { useEffect, useState } from "react";
import { getProducts, removeProduct } from "../../../services/productsService";
import ItemList from "../ItemList/ItemList";

export const Dashboard = () => {
  const { logout } = useAuth();
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  //agregar modificar y eliminar
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  const onClickRemove = (id) => {
    setLoading(true);
    removeProduct(id)
      .then(() => {
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };
  const onClickEdit = (id) => {
    navigate(`/admin/product/edit/${id}`);
  };
  return (
    <div className="dashboard-container">
      <header>
        <h2>Panel de administracion</h2>
        <div>
          <Link to="/">Volver a la tienda</Link>
        </div>
        <button onClick={logout}>Cerrar Sesion</button>
      </header>
      <section className="action-section">
        <h3>Acciones rapidas</h3>
        <div className="action-section-options">
          <Link to="/admin/products/new">Cargar +</Link>
        </div>
      </section>
      <section className="item-list-container">
        <ItemList
          onClickRemove={onClickRemove}
          onClickEdit={onClickEdit}
          products={products}
        />
      </section>
      <section className="help-section">
        <h3>Ayuda</h3>
        <p>Dede este panel poder gestionar los productos de la tienda.</p>
      </section>
    </div>
  );
};

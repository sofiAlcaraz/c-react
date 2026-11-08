import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const Dashboard = () => {
  const { logout } = useAuth();
  //agregar modificar y eliminar
  return (
    <div>
      <header>
        <h2>Panel de administracion</h2>
        <div>
          <Link to="/">Volver a la tienda</Link>
        </div>
        <button onClick={logout}>Cerrar Sesion</button>
      </header>
      <section>
        <h3>Acciones rapidas</h3>
        <div>
          <Link to="/admin/products/new">Cargar</Link>
          <Link to="#" disabled>
            Modificar
          </Link>
          <Link to="#" disabled>
            Eliminar
          </Link>
        </div>
      </section>
      <section>
        <h3>Ayuda</h3>
        <p>Dede este panel poder gestionar los productos de la tienda.</p>
      </section>
    </div>
  );
};

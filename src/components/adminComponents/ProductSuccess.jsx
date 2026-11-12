import { Link, useParams } from "react-router-dom";

export const ProductSuccess = ({ title }) => {
  const { id } = useParams();
  return (
    <section>
      <h2>{title}</h2>
      <p>Id del producto: {id}</p>
      <p>Puede cargar o eliminar otro producto haciendo click en el botón</p>
      <div>
        <Link to={`/admin`}>Volver a productos</Link>
      </div>
    </section>
  );
};

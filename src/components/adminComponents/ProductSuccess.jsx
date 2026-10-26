import { Link, useParams } from "react-router-dom";

export const ProductSuccess = () => {
  const { id } = useParams();
  return (
    <section>
      <h2>Producto cargado con exito</h2>
      <p>Id del producto: {id}</p>
      <p>Puede cargar otro haciendo click en el boton</p>
      <div>
        <Link to={`/admin`}>Cargar otro producto</Link>
      </div>
    </section>
  );
};

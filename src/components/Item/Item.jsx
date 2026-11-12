import "./Item.css";

const Item = ({ name, image, description, price, children }) => {
  return (
    <article className="card">
      <img src={image} alt={`Imagen de articulo${name}`} loading="lazy" />
      <h3>{name}</h3>
      <p>Descripcion: {description}</p>
      <p>Precio: ${price}</p>
      {children}
    </article>
  );
};
export default Item;

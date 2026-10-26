export const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) => {
  return (
    <section>
      <form className="product-form" onSubmit={onSubmit}>
        <h2>Agregar nuevo producto</h2>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={onChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="numbre"
            name="price"
            value={product.price}
            onChange={onChange}
          />
          {errors.price && <p>{errors.price}</p>}
        </div>
        <div>
          <label>Categoria:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={onChange}
          />
          {errors.category && <p>{errors.category}</p>}
        </div>
        <div>
          <label>Descripcion:</label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={onChange}
          />
          {errors.description && <p>{errors.description}</p>}
        </div>
        <div>
          <label>Imagen:</label>
          <input type="file" accept="image/*" onChange={onFileChange} />
          {errors.file && <p>{errors.file}</p>}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar"}
        </button>
        {errors.general && <p>{errors.general}</p>}
      </form>
    </section>
  );
};

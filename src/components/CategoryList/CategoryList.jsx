const CategoryList = ({ categories, setCategory }) => {
  return (
    <>
      <h3>Filtrar Por</h3>
      {categories ? (
        categories.map((category) => (
          <button onClick={() => setCategory(category.name)} key={category.id}>
            {category.name}
          </button>
        ))
      ) : (
        <p>No hay filtros para mostrar</p>
      )}
    </>
  );
};
export default CategoryList;

export const validateProduct = (product) => {
  const errors = {};
  if (product.name.trim() === "") {
    errors.name = "El nombre es obligatorio";
  }
  if (!product.price || Number(product.price) <= 0) {
    errors.price = "El precio debe ser mayor que cero";
  }
  if (product.category.trim() === "") {
    errors.category = "La categoria es obligatoria";
  }
  if (product.description.trim() === "") {
    errors.description = "La descripcion es obligatoria";
  }
  if (!product.file) {
    errors.file = "Debes seleccionar una imagen";
  }
  return errors;
};

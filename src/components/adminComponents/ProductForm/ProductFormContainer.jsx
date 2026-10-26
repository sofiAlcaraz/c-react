import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../../services/productsService";
import { ProductFormUI } from "./ProductFormUI";
import { uploadImage } from "../../../services/uploadImage";
import { validateProduct } from "../../../utils/validateProduct";

export const ProductFormContainer = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0] || null;
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.prevenDefault();
    //seteo
    setErrors({});
    setLoading(true);
    //validar entradas
    const newErrors = validateProduct({ ...product, file }); //agrego el file dentro del objeto
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      //subir imagen
      const imageUrl = await uploadImage(file);
      //armar estrucuta del producto
      const productData = {
        ...product,
        price: Number(product.price), //toma el ultimo valor de price, sobreescribe, si existe el ultimo valor
        image: imageUrl,
      };
      //alta de producto
      const id = await createProduct(productData);

      //reseterar el formulario
      setProduct({ name: "", price: "", category: "", description: "" });
      setFile(null);
      //navegar a la pagina de exito
      navigate(`/admin/products/success/${id}`, { replace: true }); //remplace la url anterior y lo anteirior no quede en el historial de navegacion

      //set loading chau
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductFormUI
      product={product}
      errors={errors}
      loading={loading}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
    />
  );
};

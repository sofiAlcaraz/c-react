import { useEffect, useState } from "react";
import CategoryList from "../CategoryList/CategoryList";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../services/categorysService";

const ContentFilterContainer = () => {
  const [categories, setCategories] = useState();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  const setCategory = (category) => {
    navigate(`/category/${category}`);
  };
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error{error}</p>;

  return <CategoryList categories={categories} setCategory={setCategory} />;
};

export default ContentFilterContainer;

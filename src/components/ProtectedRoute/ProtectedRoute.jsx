import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  //esperamos para ver si el usuario esta autenticado antes de redirigir
  if (loading) return <p>Iniciando sesion</p>;
  //navegacion declarativa
  if (!user) return <Navigate to="/admin/login" />;

  return children;
};

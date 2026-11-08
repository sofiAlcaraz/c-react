import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export const Login = () => {
  //hacer formulario de error
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      navigate("/admin", { replace: true }); //no se pueda volver atras
    } catch (error) {
      console.log(error);
      alert("Error al iniciar sesion");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="correo electronico"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Ingresar</button>
    </form>
  );
};

import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartView } from "./components/Cart/CartView";
import { ProductFormContainer } from "./components/adminComponents/ProductForm/ProductFormContainer";
import { ProductSuccess } from "./components/adminComponents/ProductSuccess";
import { PublicLayout } from "./layouts/PublicLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { Login } from "./components/Login/Login";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { Dashboard } from "./components/adminComponents/Dashboard/Dashboard";
import ProductEdit from "./components/adminComponents/ProductEdit/ProductEdit";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<h1>Bienvenido</h1>} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/products/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
        </Route>
        {/*Ruta Login*/}
        <Route path="/admin/login" element={<Login />} />
        {/*Rutas Admin*/}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/*El index de admin es ir al dashboard */}
          <Route index element={<Navigate to={"dashboard"} />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path="products/new"
            element={<ProductFormContainer title={"Agregar producto"} />}
          />
          <Route
            path="products/success/delete/:id"
            element={<ProductSuccess title={"Producto Eliminado con exito"} />}
          />
          {/*Hay otra forma de reutilizarlo?*/}
          <Route
            path="products/success/:id"
            element={<ProductSuccess title={"Producto Agregado con exito"} />}
          />
          <Route
            path="product/edit/:id"
            element={<ProductEdit title={"Editar de producto"} />}
          />
          {/*en cuanto a la propiedad title, En este caso me conviene hacerlo asi? o revisar si la url es edit o new y decidirlo en ProductFormContainer */}
        </Route>
      </Routes>
    </>
  );
}

export default App;

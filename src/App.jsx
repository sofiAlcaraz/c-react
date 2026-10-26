import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <Header />
      <main className="app-container">
        <Routes>
          <Route path="/" element={<h1>Bienvenido</h1>} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/cart" element={<h1>Carrito</h1>} />
          <Route path="/products/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemDetailContainer />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

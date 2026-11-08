import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

//no uso Layout pues renderiza rutas, uso Outlet, este es como un children

export const PublicLayout = () => {
  return (
    <>
      <Header />
      <main className="app-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

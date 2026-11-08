import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <main className="app-container">
      <Outlet />
    </main>
  );
};

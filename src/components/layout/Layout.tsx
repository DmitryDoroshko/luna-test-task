import { Outlet } from "react-router";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="mt-16 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
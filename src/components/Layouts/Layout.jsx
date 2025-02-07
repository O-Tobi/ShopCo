import { Outlet } from "react-router-dom";
import HeaderComponent from "./header/HeaderComponent";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

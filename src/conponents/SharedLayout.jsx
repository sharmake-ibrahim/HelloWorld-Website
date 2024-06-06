import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <div className="section">
        <Outlet />
      </div>
      <Navbar />
    </>
  );
};

export default SharedLayout;

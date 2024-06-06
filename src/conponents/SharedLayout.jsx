import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default SharedLayout;

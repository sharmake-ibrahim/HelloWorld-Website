import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

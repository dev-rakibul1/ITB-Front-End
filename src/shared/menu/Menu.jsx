import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className=" bg-gray-400 py-4">
      <div className=" theme-container">
        <ul className="navbar-nav flex items-center justify-start">
          <li className="nav-items text-lg font-semibold">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className=" ml-4 nav-items text-lg font-semibold">
            <Link to="/search" className="nav-link">
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;

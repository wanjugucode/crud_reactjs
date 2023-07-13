import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#D8C7D7" : "white",
    };
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (

    <nav className="navbar">
      <button
        className={`navbar-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="navbar-toggle-icon"></span>
      </button>
      <div className="navbar-menu-wrapper" >
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        {/* <NavLink style={navLinkStyles} to="/">
          Login
        </NavLink> */}
      <li>  <NavLink style={navLinkStyles} to="/dashboard">
          Dashboard
        </NavLink>
        </li>
        <li>  <NavLink style={navLinkStyles} to="/">
          Home
        </NavLink>
        </li>
        <li><NavLink style={navLinkStyles} to="/schedule">
          Schedule
        </NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
};

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#D8C7D7" : "white",
    };
  };


  const toggleMenu2 = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-brand">

      <button
          className={`nav-toggler ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu2}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
</div>
      <div className="nav-menu-wrapper">
      <ul className={`nav-nav ${isMenuOpen ? "open" : ""}`}>
          {/* <NavLink style={navLinkStyles} to="/">
          Login
        </NavLink> */}
          <li>
            {" "}
            <NavLink style={navLinkStyles} to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink style={navLinkStyles} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to="/schedule">
              Schedule
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

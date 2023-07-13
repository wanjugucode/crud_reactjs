import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#D8C7D7" : "white",
    };
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">

        <button
          className={`navbar-toggler ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <ul className={`navbar-nav ${isOpen ? "open" : ""}`}>
         <li className="navbar-menu-item2">
         <NavLink className="nav-link2" style={navLinkStyles} to="/dashboard">
           Dashboard
         </NavLink>
         </li>
         <li className="navbar-menu-item2">
         <NavLink  className="nav-link2" style={navLinkStyles} to="/home">
           Home
         </NavLink>
         </li>
         <li className="navbar-menu-item2">
         <NavLink className="nav-link2" style={navLinkStyles} to="/schedule">
           Schedule
        </NavLink>
        </li>
      </ul>
    </nav>
  );
};

import React from "react";
// import ".css/nav.css";
import { NavLink } from "react-router-dom";


export const MainNavbar =()=>{
    const navLinkStyles = ({ isActive }) => {
        return {
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "#D8C7D7" : "white",
        };
      };
  return (
    <nav className="navbar2">
      <input type="checkbox" id="navbar-toggle2" className="navbar-toggle2" />
      <label htmlFor="navbar-toggle2" className="navbar-toggle-label2">
        <span className="navbar-toggle-icon2"></span>
      </label>
      <ul className="navbar-menu2">
        {/* <li className="navbar-menu-item2">
               <NavLink style={navLinkStyles} to="/">
          Login
        </NavLink>
        </li> */}
        <li className="navbar-menu-item2">
        <NavLink style={navLinkStyles} to="/dashboard">
          Dashboard
        </NavLink>
        </li>
        <li className="navbar-menu-item2">
        <NavLink style={navLinkStyles} to="/home">
          Home
        </NavLink>
        </li>
        <li className="navbar-menu-item2">
        <NavLink style={navLinkStyles} to="/schedule">
          Schedule
        </NavLink>
        </li>
      </ul>
    </nav>
  );
}


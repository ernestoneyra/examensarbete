import React from "react";
import './Navbar.css';
import { BrowserRouter as Link, NavLink } from "react-router-dom";
//import { NavLink as Link } from 'react-router-dom';
import * as ROUTES from "../../Constants/routes";

const Navbar = () => {
  return (
    <div className="app-navbar">
      <nav className="app-navbar-links">
        <NavLink
          activeclassname="is-active"
          to={ROUTES.HOME}
          style={({ isActive }) => ({
            color: isActive ? "#FF5C00" : "#fff",
          })}
        >
          Hem
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#FF5C00" : "#fff",
          })}
          to={ROUTES.BACKGROUND}
        >
          Bakgrund
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#FF5C00" : "#fff",
          })}
          to={ROUTES.PORTFOLIO}
        >
          Portfolio
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#FF5C00" : "#fff",
          })}
          to={ROUTES.ABOUT_ME}
        >
          Om mig
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#FF5C00" : "#fff",
          })}
          to={ROUTES.CONTACT_ME}
        >
          Kontakta mig
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;

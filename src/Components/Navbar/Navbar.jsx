import React, { useState } from "react";
import "./Navbar.css";
import * as ROUTES from "../../Constants/routes";
import { BrowserRouter as Link, NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow((prev) => !prev);
  };

  const closeMenu = () => {
    setShow(false);
  };

  const Nav = (
    <div className="app-navbar">
      <nav className={`menuNav ${show ? "showMenu" : ""} app-navbar-links`}>
        <NavLink
          className={"hida top-hida"}
          onClick={() => closeMenu()}
          activeclassname="is-active"
          to={ROUTES.HOME}
          style={({ isActive }) => ({
            color: isActive ? "#FF5C00" : "#fff",
          })}
        >
          Hem
        </NavLink>
        <NavLink
          className={"hida"}
          onClick={() => closeMenu()}
          style={({ isActive }) => ({
            color: isActive ? "#FF5C00" : "#fff",
          })}
          to={ROUTES.BACKGROUND}
        >
          Bakgrund
        </NavLink>
        <NavLink
          className={"hida"}
          onClick={() => closeMenu()}
          style={({ isActive }) => ({
            color: isActive ? "#FF5C00" : "#fff",
          })}
          to={ROUTES.PORTFOLIO}
        >
          Portfolio
        </NavLink>
        <NavLink
          className={"hida"}
          onClick={() => closeMenu()}
          style={({ isActive }) => ({
            color: isActive ? "#FF5C00" : "#fff",
          })}
          to={ROUTES.ABOUT_ME}
        >
          Om mig
        </NavLink>
        <NavLink
          className={"hida"}
          onClick={() => closeMenu()}
          style={({ isActive }) => ({
            color: isActive ? "#FF5C00" : "#fff",
          })}
          to={ROUTES.CONTACT_ME}
        >
          Kontakta mig
        </NavLink>
       {/*  <NavLink
          className={"hida"}
          onClick={() => closeMenu()}
          style={({ isActive }) => ({
            color: isActive ? "#FF5C00" : "fff",
          })}
          to={ROUTES.TEST}
        >
          Test
        </NavLink> */}
      </nav>
    </div>
  );

  return (
    <>
      <div className="navbar-hidden navBar">
        <button onClick={() => handleToggle()}>
          {show ? (
            <MdClose
              className="mdclose"
              style={{ color: "#fff", width: "40px", height: "40px" }}
            />
          ) : (
            <FiMenu
              className="mdmenu"
              style={{ color: "#7b7b7b", width: "40px", height: "40px" }}
            />
          )}
        </button>
        {Nav}
      </div>

      <div className="navbar-visible">
        <div className="app-navbar">
          <nav className={` app-navbar-links`}>
            <NavLink
              className={"navlink"}
              activeclassname="is-active"
              to={ROUTES.HOME}
              style={({ isActive }) => ({
                color: isActive ? "#FF5C00" : "#fff",
              })}
            >
              Hem
            </NavLink>
            <NavLink
              className={"navlink"}
              style={({ isActive }) => ({
                color: isActive ? "#FF5C00" : "#fff",
              })}
              to={ROUTES.BACKGROUND}
            >
              Bakgrund
            </NavLink>
            <NavLink
              className={"navlink"}
              style={({ isActive }) => ({
                color: isActive ? "#FF5C00" : "#fff",
              })}
              to={ROUTES.PORTFOLIO}
            >
              Portfolio
            </NavLink>
            <NavLink
              className={"navlink"}
              style={({ isActive }) => ({
                color: isActive ? "#FF5C00" : "#fff",
              })}
              to={ROUTES.ABOUT_ME}
            >
              Om mig
            </NavLink>
            <NavLink
              className={"navlink"}
              style={({ isActive }) => ({
                color: isActive ? "#FF5C00" : "#fff",
              })}
              to={ROUTES.CONTACT_ME}
            >
              Kontakta mig
            </NavLink>
            {/* <NavLink
              className={"navlink"}
              style={({ isActive }) => ({
                color: isActive ? "#FF5C00" : "#fff",
              })}
              to={ROUTES.TEST}
            >
              Test
            </NavLink> */}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

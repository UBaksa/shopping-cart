import React from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
// moze i sa img src={require("putanja do slike")}
export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to={"/"}>
        <img className="logo" src={logo} />
      </NavLink>
      <div className="links">
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          <h2>PRODUCTS</h2>
        </NavLink>
        <NavLink
          to={"/cart"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          <h2>CART</h2>
        </NavLink>
      </div>
    </header>
  );
}

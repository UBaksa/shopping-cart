import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
// import logo from "../../assets/images/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to={"/"}>
        <img
          src={require("../../assets/images/6572026.png")}
          alt="logo"
          className="logo"
        />
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
          <ShoppingCartIcon className="cartIcon" fontSize="large" />
        </NavLink>
      </div>
    </header>
  );
}

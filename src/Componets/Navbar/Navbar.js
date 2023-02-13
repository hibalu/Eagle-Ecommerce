import React from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ShoppingBasketOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <img className="img" src="./phoenix.png" alt="Logo" />
        </li>
        <li>
          <div className="forms">
            <input type="text" placeholder="Search" />
            <button className="button">search</button>
          </div>
        </li>

        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/women">Women</a>
        </li>
        <li>
          <a href="/men">Men</a>
        </li>

        <li>
          <a href="/registration">Registration</a>
        </li>
        <li>
          <a href="/cart">
            <ShoppingCartOutlined />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

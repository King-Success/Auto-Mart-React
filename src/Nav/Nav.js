import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="front-navbar container f-15 w-100">
      <span className="front-navbar-toggle" id="navbar__toggle__btn">
        &#9776;
      </span>
      <a href="index.html" className="logo">
        Auto Mart
      </a>
      <ul className="front-main-nav" id="main__nav__menu">
        <li>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

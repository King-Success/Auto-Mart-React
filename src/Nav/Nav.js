import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="front-navbar container f-15 w-100">
      <span className="front-navbar-toggle" id="navbar__toggle__btn">
        &#9776;
      </span>
      <Link to="/" className="logo">
        Auto Mart
      </Link>
      <ul className="front-main-nav" id="main__nav__menu">
        <li>
          <Link to="/auth/login" className="nav-link">
            Login
          </Link>
        </li>
        <li>
          <Link to="/auth/signup" className="nav-link">
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

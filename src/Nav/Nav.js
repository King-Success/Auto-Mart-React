import React from "react";
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
          <a href="UI/login.html" className="nav-link" id="login">
            Login
          </a>
        </li>
        <li>
          <a href="UI/signup.html" className="nav-link" id="signup">
            Signup
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { setToken } from "../../utils/api";
import "./Nav.css";

function Nav({ user, logout }) {
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) setToken(authToken);
  });
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
          {user && user.first_name ? (
            <Link to="/user/profile" className="nav-link">
              {user.first_name} {user.last_name}
            </Link>
          ) : (
            <Link to="/auth/login" className="nav-link">
              Login
            </Link>
          )}
        </li>
        <li>
          {user && user.first_name ? (
            <Link to="/" onClick={logout} className="nav-link">
              Logout
            </Link>
          ) : (
            <Link to="/auth/signup" className="nav-link">
              Signup
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

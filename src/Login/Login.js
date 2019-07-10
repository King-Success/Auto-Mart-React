import React from "react";
import "./Login.css";

function Login() {
  return (
    <div id="login" className="container d-flex flex-col flex-center-vertical">
      <div className="login__card d-flex flex-col flex-center-vertical">
        <p className="f-25 p-25 smooth" style={{ marginBottom: "5px", marginTop: '45px' }}>
          Log in to your account
        </p>
        <div className="alert smooth">
          <p id="error" />
          <p id="success" />
        </div>
        <input id="email" type="text" placeholder="Email address" />
        <input id="password" type="password" placeholder="Password" />
        <button className="f-20" id="login-button">
          Log In
        </button>
      </div>
      <div className="forgot__password">
        <a href="login" className="p-15">
          Don't have an account yet? Sign up
        </a>
        <a href="login" className="p-15">
          Forgot your password?
        </a>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";

function Login({ login }) {
  const [form, setFormValues] = useState({ email: "", password: "" });
  const updateState = e => {
    setFormValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="login" className="container d-flex flex-col flex-center-vertical">
      <div className="login__card d-flex flex-col flex-center-vertical">
        <p
          className="f-25 p-25 smooth"
          style={{ marginBottom: "10px", marginTop: "45px" }}
        >
          Log in to your account
        </p>
        <div className="alert smooth">
          <p id="error" />
          <p id="success" />
        </div>
        <input
          name="email"
          id="email"
          type="text"
          placeholder="Email address"
          value={form.email}
          onChange={updateState}
        />
        <input
          name="password"
          id="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={updateState}
        />
        <button onClick={() => login(form)} className="f-20" id="login-button">
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

Login.propTypes = {
  login: PropTypes.func.isRequired
};

export default Login;

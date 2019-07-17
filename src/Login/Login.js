import React, { useState } from "react";
import "./Login.css";
import { setAuthUser } from "../utils/login";
import Client, { setToken } from "../utils/api";

function Login({ history }) {
  const [form, setFormValues] = useState({ email: "", password: "" });

  const loginUser = async () => {
    const { email, password } = form;
    const data = await Client.post("/auth/signin", { email, password });
    if (data.status === 200) {
      const { data: user } = data;
      const { token } = user;
      setAuthUser(token, user);
      setToken(token);
      history.push("/user/profile");
    }
  };

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
          style={{ marginBottom: "5px", marginTop: "45px" }}
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
        <button onClick={loginUser} className="f-20" id="login-button">
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

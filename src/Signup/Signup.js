import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div id="signup" className="container d-flex flex-col flex-center-vertical">
      <div className="main__wrapper">
        <div className="card__wrapper">
          <div className="benefit">
            <div className="free__account">
              <p className="f-25">
                <i className="far fa-user-circle" /> Sign up for free
              </p>
              <p className="f-14">
                Create a free account in less than 20 seconds, no hidden fee, no
                extra charges, absolutely free!
              </p>
            </div>
            <hr />
            <div className="post__ad">
              <p className="f-25">
                <i className="fas fa-car" /> Post an Ad
              </p>
              <p className="f-14">
                Put up an advert in less than a minute by providing pictures and
                basic infomation about the automobile.
              </p>
            </div>
            <hr />
            <div className="connect__with__buyers">
              <p className="f-25">
                <i className="far fa-money-bill-alt" /> Connect with buyers
              </p>
              <p className="f-14">
                Get connected to over 1 million verified buyers on the platform,
                cash out in a few hours.
              </p>
            </div>
          </div>
          <div
            className="signup__card d-flex flex-col flex-center-vertical"
            id="signup-form"
          >
            <p className="f-25 p-25 smooth" style={{ marginBottom: "5px" }}>
              Create a free account
            </p>
            <div className="alert smooth">
              <p id="error" />
              <p id="success" />
            </div>
            <label htmlFor="firstname">
              firstname <em>*</em>
              <input
                className=""
                name="firstname"
                id="firstname"
                type="text"
                placeholder="Firstname"
              />
            </label>
            <label htmlFor="lastname">
              lastname <em>*</em>
              <input
                className=""
                name="lastname"
                id="lastname"
                type="text"
                placeholder="Lastname"
              />
            </label>
            <label htmlFor="email">
              email <em>*</em>
              <input
                className=""
                name="email"
                id="email"
                type="text"
                placeholder="Email address"
              />
            </label>
            <label htmlFor="state">
              phone <em>*</em>
              <input
                className=""
                name="phone"
                id="phone"
                type="text"
                placeholder="Phone"
              />
            </label>
            <label htmlFor="address">
              address <em>*</em>
              <input
                className=""
                name="address"
                id="address"
                type="text"
                placeholder="Address"
              />
            </label>
            <label htmlFor="password">
              password <em>*</em>
              <input
                name="password"
                id="password"
                type="password"
                placeholder="Password"
              />
            </label>
            <label htmlFor="confirm">
              Confirm Password <em>*</em>
              <input
                name="confirm"
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
              />
            </label>
            <button className="f-20" id="signup-button">
              Sign up
            </button>
            <p className="acknowledge f-12">
              Signing up signifies that you have read and agree to the{" "}
              <a href="login">Terms of Service</a> and our{" "}
              <a href="login">Privacy Policy.</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

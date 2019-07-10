import React from "react";
import "./Landing.css";
import bannerImage from "./bannerImage.png";

function Landing() {
  return (
    <div id="header" className="banner d-flex flex-col">
      <div className="banner__image">
        <img src={bannerImage} alt="" />
      </div>
      <div className="banner__text">
        <h1 className="h-text f-40">Welcome to Auto Mart</h1>
        <p className="pitch f-20">
          Auto Mart is an online marketplace for automobiles of diverse makes,
          model or body type. With Auto Mart, users can sell their cars or buy
          from trusted dealerships or private sellers.
        </p>
        <div className="buttons__wrapper">
          <a href="index" className="btn f-20 opacity" id="get-started">
            Buy Cars
          </a>
          <a href="index" className="btn f-20 opacity" id="get-started">
            Sell Car
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;

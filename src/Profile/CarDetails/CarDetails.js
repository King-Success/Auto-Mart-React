import React from "react";
import {Link } from 'react-router-dom';
import PropTypes from "prop-types";
import "./CarDetails.css";

function CarDetails({ data, match }) {
  return (
    <div className="grid">
      <div className="grid__image">
        <img src="" alt="" />
      </div>
      <div className="grid__description">
        <div className="text">
          <h1 className="title">Car Model</h1>
          <ul className="f-15">
            <li>
              <strong>body type</strong>:{" "}
            </li>
            <li>
              <strong>state</strong>:{" "}
            </li>
            <li>
              <strong>manufacturer</strong>:{" "}
            </li>
            <li>
              <strong>posted on</strong>:{" "}
            </li>
            <li>
              <strong>price</strong>: <em className="" style={{ color: "green" }} />
            </li>
          </ul>
        </div>
        <div className="actions">
          <a href="login">
            <i className="far fa-eye"> 0</i>
          </a>
          <a href="login">
            <i className="fas fa-shopping-cart"> </i>
          </a>
          <Link
            to={`${match.url}/edit`}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            <i className="fas fa-edit"> price</i>
          </Link>
          <a
            href="login"
            style={{ textDecoration: "underline", cursor: "pointer" }}
            className="sold"
          >
            <i className="fas fa-toggle-on"> mark as sold</i>
          </a>
        </div>
      </div>
    </div>
  );
}

CarDetails.propTypes = {
  data: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default CarDetails;

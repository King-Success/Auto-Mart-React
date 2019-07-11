import React from "react";
import PropTypes from "prop-types";
import "./CarDetails.css";

function CarDetails({ data }) {
  return (
    <div class="grid">
      <div class="grid__image">
        <img src="" alt="" />
      </div>
      <div class="grid__description">
        <div class="text">
          <h1 class="title">Car Model</h1>
          <ul class="f-15">
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
              <strong>price</strong>: <em class="" style={{ color: "green" }} />
            </li>
          </ul>
        </div>
        <div class="actions">
          <a href="login">
            <i class="far fa-eye"> 0</i>
          </a>
          <a href="login">
            <i class="fas fa-shopping-cart"> </i>
          </a>
          <a
            href="login"
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            <i class="fas fa-edit"> price</i>
          </a>
          <a
            href="login"
            style={{ textDecoration: "underline", cursor: "pointer" }}
            class="sold"
          >
            <i class="fas fa-toggle-on"> mark as sold</i>
          </a>
        </div>
      </div>
    </div>
  );
}

CarDetails.propTypes = {
  data: PropTypes.object.isRequired
};

export default CarDetails;

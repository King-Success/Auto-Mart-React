import React from "react";
import PropTypes from "prop-types";
import "./DisplayCar.css";

function DisplayCar(car) {
  return (
    <div className="grid">
      <div className="post">
        <a href="car.html" style={{ height: "70%" }}>
          <img src="" alt="" style={{ height: "100%" }} />
        </a>
        <div className="details">
          <a href="login">
            <h2 className="title">{car.model || "Lorem Ipsum"}</h2>
            <em style={{ color: "green" }} />{" "}
          </a>
        </div>
        <div className="actions">
          <a href="login">
            <i className="fas fa-trash f-15" style={{ color: "red" }} />
          </a>
          <a href="login">
            <i className="far fa-eye f-15">
              <span className="f-13">10</span>
            </i>
          </a>
          <a href="login">
            <i className="far fa-user-circle f-15" />
          </a>
        </div>
      </div>
    </div>
  );
}

DisplayCar.propTypes = {
  car: PropTypes.object.isRequired
};

export default DisplayCar;

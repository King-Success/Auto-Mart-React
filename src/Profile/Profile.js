import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import CarDetails from "./CarDetails/CarDetails";
import Modal from "./Modal/Modal";
import "./Profile.css";

function Profile({ history, match }) {
  const goBack = () => {
    history.goBack();
  };

  return (
    <Fragment>
      <div id="" className="container">
        <div className="profile">
          <div className="aside">
            <div className="avater__card">
              <div className="avater" id="avater">
                <img src="" alt="" />
              </div>
              <div className="name">
                <h2>User Name</h2>
              </div>
            </div>
            <div className="btns">
              <a
                href="post-ad.html"
                style={{
                  cursor: "pointer",
                  width: "50%",
                  color: "white",
                  background: "#092467",
                  borderRadius: "5px"
                }}
                className="btn smooth"
              >
                create new Ad
              </a>{" "}
              <br />
              <a
                href="unsold-cars.html"
                style={{
                  cursor: "pointer",
                  width: "50%",
                  color: "white",
                  background: "#092467",
                  borderRadius: "5px"
                }}
                className="btn smooth"
              >
                buy car
              </a>
            </div>
          </div>
          <div className="main" id="cars-grid">
            <div className="alert smooth" style={{ textAlign: "center" }}>
              Loading...
            </div>
            <CarDetails data={{}} match={match} />
          </div>
        </div>
      </div>
      <Route
        exact
        path={`${match.path}/edit`}
        render={props => (
          <Modal onCancel={goBack} {...props} />
        )}
      />
    </Fragment>
  );
}

Profile.propTypes = {
  match: PropTypes.object.isRequired
};
export default Profile;

import React, { Fragment, useState, useEffect } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import CarDetails from "./CarDetails/CarDetails";
import Modal from "./Modal/Modal";
import Client from "../../utils/api";
import { handleData } from "../../utils";
import "./Profile.css";

function Profile({ history, match, logout }) {
  const [adverts, setAdverts] = useState([]);
  const [Loading, setLoading] = useState(false);

  const closeModal = () => {
    history.goBack();
  };

  useEffect(() => {
    const fetchAds = async () => {
      const data = await Client.get("/car");
      const ads = handleData(data, setLoading, history, logout);
      if (ads) setAdverts(ads);
    };
    setLoading(true);
    fetchAds();
  }, []);

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
              <a href="post-ad.html" className="btn btn-blue smooth">
                create new Ad
              </a>{" "}
              <br />
              <a href="unsold-cars.html" className="btn btn-blue smooth">
                buy car
              </a>
            </div>
          </div>
          <div className="main" id="cars-grid">
            <div className="alert smooth centered" />
            <CarDetails data={{}} match={match} />
          </div>
        </div>
      </div>
      <Route
        exact
        path={`${match.path}/edit`}
        render={props => <Modal onCancel={closeModal} {...props} />}
      />
    </Fragment>
  );
}

Profile.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Profile;

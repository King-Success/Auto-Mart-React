import React, { Fragment, useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import CarDetails from "./CarDetails/CarDetails";
import Modal from "./Modal/Modal";
import Client from "../../utils/api";
import { handleData } from "../../utils";
import "./Profile.css";
import Spinner from "../../views/Spinner/Spinner";

function Profile({ history, match, user }) {
  const [adverts, setAdverts] = useState([]);
  const [loading, setLoading] = useState(true);

  const closeModal = () => {
    history.goBack();
  };

  useEffect(() => {
    const fetchAds = async () => {
      const data = await Client.get("/car");
      const ads = handleData(data, setLoading, history);
      if (ads) setAdverts(ads);
    };
    fetchAds();
  }, []);

  console.log(adverts);
  return (
    <Fragment>
      <Spinner loading={loading} />
      <div id="" className="container">
        <div className="profile">
          <div className="aside">
            <div className="avater__card">
              <div className="avater" id="avater">
                <img src="" alt="" />
              </div>
              <div className="name">
                <h2>
                  {user.first_name
                    ? `${user.first_name} ${user.last_name}`
                    : "Hello User"}
                </h2>
              </div>
            </div>
            <div className="btns">
              <Link to={"/cars/all"} className="btn btn-blue smooth">
                create new Ad
              </Link>{" "}
              <br />
              <Link to={"/cars/new"} className="btn btn-blue smooth">
                buy car
              </Link>
            </div>
          </div>
          <div className="main" id="cars-grid">
            <div className="alert smooth centered" />
            {adverts.length ? (
              adverts.map(advert => <CarDetails data={advert} match={match} />)
            ) : loading ? (
              ""
            ) : (
              <h2 style={{ textAlign: "center" }}>
                404, you are yet to post an advert
              </h2>
            )}
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

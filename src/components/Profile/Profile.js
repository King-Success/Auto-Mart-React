import React, { Fragment, useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import CarDetails from "./CarDetails/CarDetails";
import Pagination from "../../views/Pagination/Pagination";
import Modal from "./Modal/Modal";
import Client from "../../utils/api";
import { handleData } from "../../utils";
import notify from "../../utils/notify";
import "./Profile.css";
import Spinner from "../../views/Spinner/Spinner";

function Profile({ history, match, user }) {
  const [alladverts, setAllAdverts] = useState([]);
  const [activeAdverts, setActiveAdverts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNav, setPageNav] = useState({ hasNext: false, hasPrev: false });
  const [page, setPage] = useState(0);
  const perPage = 5;

  const paginate = (page, data = []) => {
    if (!data) return;
    const startIndex = perPage * page;
    const endIndex = startIndex + perPage;
    const hasNext = data[endIndex] ? true : false;
    const hasPrev = data[startIndex - 1] ? true : false;
    const adverts = data.slice(startIndex, endIndex);
    setPageNav({
      hasNext: hasNext,
      hasPrev: hasPrev
    });
    setActiveAdverts(adverts);
    return false;
  };

  const next = () => {
    const nextPage = page + 1;
    paginate(nextPage, alladverts);
    setPage(nextPage);
    return false;
  };

  const prev = () => {
    const prevPage = page - 1;
    paginate(prevPage, alladverts);
    setPage(prevPage);
    return false;
  };

  const closeModal = () => {
    history.goBack();
    return false;
  };

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const data = await Client.get("/car");
        const ads = handleData(data, setLoading, history);
        if (ads) {
          paginate(page, ads);
          setAllAdverts(ads);
        }
      } catch (err) {
        setLoading(false);
        notify("Oops, check your connection and try again!");
      }
    };
    fetchAds(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              <Link to={"/cars/new"} className="btn btn-blue smooth">
                create new Ad
              </Link>{" "}
              <br />
              <Link to={"/cars/all"} className="btn btn-blue smooth">
                buy car
              </Link>
            </div>
          </div>
          <div className="main" id="cars-grid">
            {activeAdverts.length ? (
              activeAdverts.map((advert, index) => (
                <CarDetails data={advert} match={match} key={index} />
              ))
            ) : loading ? (
              ""
            ) : (
              <h2 style={{ textAlign: "center" }}>
                404, you are yet to post an advert
              </h2>
            )}
            <Pagination
              display={true}
              next={next}
              prev={prev}
              hasNext={pageNav.hasNext}
              hasPrev={pageNav.hasPrev}
            />
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
  history: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default Profile;

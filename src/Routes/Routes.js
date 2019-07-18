import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Route, withRouter } from "react-router-dom";
import {
  loadAuthUser,
  unsetAuthUser,
  handleData,
  comparePasswords
} from "../utils/auth";
import Client from "../utils/api";
import notify from "../utils/notify";
import Navigation from "../components/Nav/Nav";
import Landing from "../components/Landing/Landing";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import AllCars from "../components/AllCars/AllCars";
import PostCar from "../components/PostCar/PostCar";
import Profile from "../components/Profile/Profile";
import Spinner from "../views/Spinner/Spinner";
import "react-toastify/dist/ReactToastify.css";
import "./Routes.css";
import "./Util.css";

function Routes({ history }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const authUser = loadAuthUser();
    if (authUser) setUser(authUser);
  }, []);

  const signup = async userData => {
    const passwordMatch = comparePasswords(userData);
    if (!passwordMatch) {
      notify("Password mismatch, try again!");
      return;
    }
    try {
      setLoading(true);
      const data = await Client.post("/auth/signup", userData);
      handleData(data, setLoading, setUser, history);
    } catch (err) {
      setLoading(false);
      notify("Oops, something happend, try again!");
    }
  };

  const login = async ({ email, password }) => {
    try {
      setLoading(true);
      const data = await Client.post("/auth/signin", { email, password });
      handleData(data, setLoading, setUser, history);
    } catch (err) {
      setLoading(false);
      notify("Oops, something happend, try again!");
    }
  };

  const logout = url => {
    setLoading(true);
    unsetAuthUser(setUser, setLoading);
    history.push(url || "/");
  };

  return (
    <div className="home__wrapper">
      <Navigation user={user} logout={logout} />
      <ToastContainer />
      <Spinner loading={loading} />
      <Route exact path="/" component={Landing} />
      <Route path="/auth/login" render={() => <Login login={login} />} />
      <Route path="/auth/signup" render={() => <Signup signup={signup} />} />
      <Route path="/cars/all" component={AllCars} />
      <Route path="/cars/new" component={PostCar} />
      <Route
        path="/user/profile"
        render={props => <Profile user={user} {...props} />}
      />
    </div>
  );
}

export default withRouter(Routes);

import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Route, withRouter } from "react-router-dom";
import { loadAuthUser, unsetAuthUser, handleData } from "../utils/auth";
import Client from "../utils/api";
import notify from "../utils/notify";
import Navigation from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import AllCars from "../AllCars/AllCars";
import PostCar from "../PostCar/PostCar";
import Profile from "../Profile/Profile";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./Util.css";

function App({ history }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const authUser = loadAuthUser();
    if (authUser) setUser(authUser);
  }, []);

  const logout = () => {
    setLoading(true);
    unsetAuthUser(setUser, setLoading);
    history.push("/");
  };

  const login = async ({ email, password }) => {
    try {
      setLoading(true);
      const data = await Client.post("/auth/signin", { email, password });
      handleData(data, setLoading, setUser, history);
    } catch (err) {
      setLoading(false);
      notify("Oops, something happend, try again");
    }
  };
  return (
    <div className="home__wrapper">
      <Navigation user={user} logout={logout} />
      <ToastContainer />
      <Route exact path="/" component={Landing} />
      <Route path="/auth/login" render={() => <Login login={login} />} />
      <Route path="/auth/signup" component={Signup} />
      <Route path="/cars/all" component={AllCars} />
      <Route path="/cars/new" component={PostCar} />
      <Route path="/user/profile" component={Profile} />
    </div>
  );
}

export default withRouter(App);

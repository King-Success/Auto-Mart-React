import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import AllCars from "../AllCars/AllCars";
import PostCar from "../PostCar/PostCar";
import Profile from "../Profile/Profile";
import "./App.css";
import "./Util.css";

function App() {
  return (
    <Router>
      <div className="home__wrapper">
        <Navigation />
        <Route exact path="/" component={Landing} />
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/signup" component={Signup} />
        <Route path="/cars/all" component={AllCars} />
        <Route path="/cars/new" component={PostCar} />
        <Route path="/user/profile" component={Profile} />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import "./App.css";
import "./Util.css";

function App() {
  return (
    <Router>
      <div className="home__wrapper">
        <Navigation />
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
    </Router>
  );
}

export default App;

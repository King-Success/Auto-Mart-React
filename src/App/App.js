import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Nav/Nav";
import Landing from "../Landing/Landing";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="home__wrapper">
        <Navigation />
        <Route exect path="/" component={Landing} />
      </div>
    </Router>
  );
}

export default App;

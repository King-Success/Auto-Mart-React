import React from "react";
import Navigation from "../Nav/Nav";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="home__wrapper">
      <Navigation />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;

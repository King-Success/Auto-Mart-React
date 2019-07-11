import React from "react";
import "./AllCars.css";
import DisplayCar from "./DisplayCar/DisplayCar";
import FilterTab from "../views/FilterTab/FilterTab";

function AllCars() {
  return (
    <div class="container">
      <div class="all__cars">
        <FilterTab />
        <div class="all__cars__grid">
          <div class="alert smooth" style={{ textAlign: "center" }}>
            Loading...
          </div>
          <div class="grid" id="cars_grid">
            <DisplayCar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCars;

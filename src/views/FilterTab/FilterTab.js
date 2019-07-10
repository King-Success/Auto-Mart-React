import React from "react";
import "./FilterTab.css";

function FilterTab() {
  return (
    <div class="search__sort">
      <div class="state__make">
        <div class="state">
          <select name="" id="state">
            <option value="" disabled selected>
              State
            </option>
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>
        </div>
        <div class="make">
          <select name="" id="make">
            <option value="" disabled selected>
              Manufacturer
            </option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Tesla">Tesla</option>
          </select>
        </div>
      </div>
      <div class="price__filter">
        <div class="price">
          <select name="" id="body">
            <option value="" disabled selected>
              Body type
            </option>
            <option value="Car">Car</option>
            <option value="Truck">Truck</option>
            <option value="SUV">SUV</option>
          </select>
        </div>
        <div class="price">
          <input type="text" id="min-price" placeholder="Min price" />
        </div>
      </div>
      <div class="price__filter">
        <div class="price">
          <input type="text" id="max-price" placeholder="Max Price" />
        </div>
        <div class="go f-16">
          <button id="filter">Filter</button>
        </div>
      </div>
    </div>
  );
}

export default FilterTab;

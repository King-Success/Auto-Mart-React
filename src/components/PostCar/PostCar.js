import React from "react";
import "./PostCar.css";

function PostCar() {
  return (
    <div id="post__ad" class="container d-flex flex-col flex-center-vertical">
      <div class="main__wrapper">
        <div class="card__wrapper ">
          <div class="post__ad__left">
            <div
              class="alert smooth"
              style={{ marginBottom: 0, textAlign: "center" }}
            >
              <p id="error" />
              <p id="success" />
            </div>{" "}
            <select name="" id="state">
              <option value="">state e.g new</option>
              <option value="New">new</option>
              <option value="Used">used</option>
            </select>
            <input type="text" id="price" placeholder="price e.g 120000.00" />
            <input
              type="text"
              id="manufacturer"
              placeholder="manufacturer e.g Tesla"
            />
            <input type="text" id="model" placeholder="model e.g model S" />
            <select name="" id="type">
              <option value="">type e.g suv</option>
              <option value="Car">car</option>
              <option value="Truck">truck</option>
              <option value="SUV">suv</option>
            </select>
            <div id="image-preview">
              <img src="" alt="" id="preview" width="100%" height="100%" />
            </div>
            <input type="file" name="" id="upload-image" />
            <button class="btn" id="upload-image-btn">
              {" "}
              <i class="fas fa-plus" /> upload image
            </button>
            <button class="btn" id="submit-btn">
              {" "}
              submit{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCar;

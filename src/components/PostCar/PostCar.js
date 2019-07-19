import React, { useState } from "react";
// import ImageUpload from '../ImageUpload/ImageUploadx'
import "./PostCar.css";
import ImageUpload from "../ImageUpload/ImageUpload";

function PostCar() {
  const [form, setFormValues] = useState({
    state: "",
    price: "",
    manufacturer: "",
    model: "",
    type: "",
    image_: ""
  });

  const updateState = e => {
    e.persist();
    setFormValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div
      id="post__ad"
      className="container d-flex flex-col flex-center-vertical"
    >
      <div className="main__wrapper">
        <div className="card__wrapper ">
          <div className="post__ad__left">
            <div
              className="alert smooth"
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
            <ImageUpload callback={() => {}} />
            {/* <input type="file" name="" id="upload-image" />
            <button className="btn" id="upload-image-btn">
              {" "}
              <i className="fas fa-plus" /> upload image
            </button> */}
            <button className="btn" id="submit-btn">
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

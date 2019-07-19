import React, { useState } from "react";
import "./PostCar.css";
import ImageUpload from "../ImageUpload/ImageUpload";
import Spinner from "../../views/Spinner/Spinner";

function PostCar() {
  const [form, setFormValues] = useState({
    state: "",
    price: "",
    manufacturer: "",
    model: "",
    type: ""
  });
  const [image_url, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);

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
              <Spinner loading={uploading} />
              <img
                src={image_url}
                alt=""
                id="preview"
                width="100%"
                height="100%"
              />
            </div>
            <ImageUpload
              setImageUrl={setImageUrl}
              uploading={uploading}
              setUploading={setUploading}
            />
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

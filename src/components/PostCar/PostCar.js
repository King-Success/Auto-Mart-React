import React, { useState } from "react";
import "./PostCar.css";
import ImageUpload from "../ImageUpload/ImageUpload";
import Spinner from "../../views/Spinner/Spinner";
import Client from "../../utils/api";
import { handleData } from "../../utils";
import notify from "../../utils/notify";

function PostCar() {
  const [form, setFormValues] = useState({
    state: "",
    price: "",
    manufacturer: "",
    model: "",
    body_type: ""
  });
  const [image_url, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateFormState = e => {
    e.persist();
    setFormValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async () => {
    const payload = { ...form, image_url };
    try {
      setLoading(true);
      const response = await Client.post("/car", payload);
      handleData(response, setLoading);
      if (response.status === 201) {
        setFormValues({
          state: "",
          price: "",
          manufacturer: "",
          model: "",
          body_type: ""
        });
        setImageUrl("");
      }
    } catch (err) {
      setLoading(false);
      notify("Oops, check your connection and try again!");
    }
  };

  return (
    <div
      id="post__ad"
      className="container d-flex flex-col flex-center-vertical"
    >
      <div className="main__wrapper">
        <div className="card__wrapper ">
          <div className="post__ad__left">
            <Spinner loading={loading} />
            <select
              name="state"
              id="state"
              onChange={updateFormState}
              value={form.state}
            >
              <option value="">state e.g new</option>
              <option value="new">new</option>
              <option value="used">used</option>
            </select>
            <input
              type="text"
              value={form.price}
              name="price"
              placeholder="price e.g 120000"
              onChange={updateFormState}
            />
            <input
              type="text"
              value={form.manufacturer}
              name="manufacturer"
              onChange={updateFormState}
              placeholder="manufacturer e.g Tesla"
            />
            <input
              type="text"
              value={form.model}
              name="model"
              placeholder="model e.g model S"
              onChange={updateFormState}
            />
            <select
              name="body_type"
              id="type"
              onChange={updateFormState}
              value={form.body_type}
            >
              <option value="">type e.g suv</option>
              <option value="car">car</option>
              <option value="truck">truck</option>
              <option value="suv">suv</option>
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
            <button className="btn" id="submit-btn" onClick={handleSave}>
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

import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import notify from "../../utils/notify";
import config from "../../config";
const { CLOUDINARY_PRESET, CLOUDINARY_URL } = config;

const ImageUpload = ({ callback }) => {
  const [uploading, setUploading] = useState(false);
  let select;

  const handleUpload = e => {
    const file = e.target.files;
    const formData = new FormData();
    const types = ["image/png", "image/jpeg", "image/gif"];
    if (types.every(type => file.type !== type)) {
      notify(`'${file.type}' is not a supported format`);
    }

    if (file.size > 150000) {
      return notify(`'${file.name}' is too large, please pick a smaller file`);
    }

    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_PRESET);

    setUploading(true);

    fetch(CLOUDINARY_URL, {
      method: "POST",
      body: formData
    })
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then(image => {
        const imageUrl = image.secure_url;
        setUploading(false);
        callback({ imageUrl });
        notify("Image uploaded");
      })
      .catch(err => {
        err.json().then(e => {
          notify(`${e.message}, check your connection and try again`);
          setUploading(false);
        });
      });
  };

  return (
    <Fragment>
      <input
        type="file"
        name=""
        id="upload-image"
        onChange={handleUpload}
        ref={ref => (select = ref)}
      />

      <button
        className="btn"
        id="upload-image-btn"
        onClick={() => {
          select.click();
        }}
      >
        {uploading ? (
          "Uploading..."
        ) : (
          <i className="fas fa-plus"> Click to upload </i>
        )}
      </button>
    </Fragment>
  );
};

ImageUpload.propTypes = {
  callback: PropTypes.func.isRequired
};

export default ImageUpload;

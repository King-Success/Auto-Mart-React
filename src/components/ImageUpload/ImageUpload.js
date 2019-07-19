import React, {  Fragment } from "react";
import PropTypes from "prop-types";
import notify from "../../utils/notify";
import config from "../../config";
const { CLOUDINARY_PRESET, CLOUDINARY_URL } = config;

const ImageUpload = ({ uploading, setUploading, setImageUrl }) => {
  let select;

  const handleUpload = e => {
    const file = e.target.files[0];
    const formData = new FormData();
    const types = ["image/png", "image/jpeg", "image/gif"];
    if (types.every(type => file.type !== type)) {
      return notify(`'${file.type}' is not a supported format`);
    }

    if (file.size > 1500000) {
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
        setImageUrl(imageUrl);
        notify("Image uploaded", "success");
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
  setImageUrl: PropTypes.func.isRequired,
  setUploading: PropTypes.func.isRequired,
  uploading: PropTypes.bool.isRequired
};

export default ImageUpload;

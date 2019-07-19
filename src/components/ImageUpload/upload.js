import { CLOUDINARY_PRESET, CLOUDINARY_URL } from "../../config";
import notify from "../../utils/notify";
export const uploadFile = file => {
  let formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_PRESET);
  return fetch(CLOUDINARY_URL, {
    method: "POST",
    body: formData
  }).then(res => res.json());
};

export const isFileValid = file => {
  const isLt1M = file.size / 1024 > 1;
  if (!isLt1M) {
    notify("Image must be smaller than 2MB!");
  }
  return isLt1M;
};

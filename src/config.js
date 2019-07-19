const NODE_ENV = process.env.NODE_ENV;
const isProduction = Boolean(NODE_ENV !== "development");

export default {
  CLOUDINARY_PRESET: "pw3cblme",
  CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/code4king/image/upload"
};

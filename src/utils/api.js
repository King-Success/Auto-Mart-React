import axios from "axios";

axios.defaults.baseURL = "https://andela-auto-mart.herokuapp.com/api/v1";

const handleErrors = err => {
  if (err.response) {
    return err.response;
  } else if (err.request) {
    throw err.request;
  } else {
    throw err.message;
  }
};

const responseBody = payload => {
  return payload;
};

const setToken = token => {
  axios.defaults.headers.common["Authorization"] = token;
};

const unsetToken = () => {
  axios.defaults.headers.common["Authorization"] = "";
};
const client = {
  get: url =>
    axios
      .get(url)
      .then(responseBody)
      .catch(handleErrors),
  post: (url, body) =>
    axios
      .post(url, body)
      .then(responseBody)
      .catch(handleErrors),
  put: (url, body) =>
    axios
      .put(url, body)
      .then(responseBody)
      .catch(handleErrors),
  patch: (url, body) =>
    axios
      .patch(url, body)
      .then(responseBody)
      .catch(handleErrors),
  delete: url =>
    axios
      .delete(url)
      .then(responseBody)
      .catch(handleErrors)
};

export { axios, setToken, unsetToken, client as default };

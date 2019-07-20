import moment from "moment";
import notify from "./notify";
import { unsetAuthUser } from "./auth";

const handleData = (payload, setLoading, history = {}) => {
  const { data } = payload;
  switch (payload.status) {
    case 200:
      setLoading(false);
      return data.data;
    case 201:
      setLoading(false);
      notify("created successfully", "success");
      return data.data;
    case 400:
      setLoading(false);
      notify(`valdation error: ${data.error[0]}`);
      break;
    case 401:
      setLoading(false);
      unsetAuthUser();
      history.push("/auth/login");
      notify("Oops, session expired, kindly login!");
      break;
    case 404:
      setLoading(false);
      return [];
    default:
      setLoading(false);
      notify("Oops, something happend, try again");
      break;
  }
};

const formatDate = (date, showTime = false) =>
  moment(date).format(`ddd, MMM Do YYYY ${showTime ? "by HH:mm:ss a" : ""}`);

export { handleData, formatDate };

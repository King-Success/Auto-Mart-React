import { toast } from "react-toastify";

const Notify = (message, type = "error") => {
  // type can be error, warn, info or success
  if (type) {
    toast[type](message, {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast(message);
  }
};

export default Notify;

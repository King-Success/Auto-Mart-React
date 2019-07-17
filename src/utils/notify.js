import { toast } from "react-toastify";

const Notify = (message, type = "error") => {
  if (type) {
    toast[type](message, {
      position: toast.POSITION.TOP_CENTER
    });
  } else {
    toast(message);
  }

  //   toast.error("Error Notification !", {
  //     position: toast.POSITION.TOP_LEFT
  //   });

  //   toast.warn("Warning Notification !", {
  //     position: toast.POSITION.BOTTOM_LEFT
  //   });

  //   toast.info("Info Notification !", {
  //     position: toast.POSITION.BOTTOM_CENTER
  //   });

  //   toast("Custom Style Notification with css class!", {
  //     position: toast.POSITION.BOTTOM_RIGHT,
  //     className: "foo-bar"
  //   });
};

export default Notify;

import { setToken } from "../utils/api";
import { toast } from "react-toastify";
const setAuthUser = (token, user) => {
  const authUser = JSON.stringify(user);
  localStorage.setItem("authUser", authUser);
  localStorage.setItem("authToken", token);
};

const loadAuthUser = () => {
  const authUser = localStorage.getItem("authUser");
  return authUser;
};

const handleData = (payload, setLoading, history) => {
  const { data } = payload;
  console.log(data);
  if (payload.status === 200) {
    const { data: user } = data;
    const { token } = user;
    setAuthUser(token, user);
    setToken(token);
    setLoading(false);
    toast("Login successful");
    history.push("/user/profile");
  } else if (payload.status === 400) {
    setLoading(false);
    toast("Validation error: all fields are required");
  } else if (payload.status === 401) {
    setLoading(false);
    toast("Wrong username or password");
  } else {
    setLoading(false);
    toast("Oops, something happend, try again");
  }
};

export { setAuthUser, loadAuthUser, handleData };

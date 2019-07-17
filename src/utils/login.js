import { setToken } from "../utils/api";
import notify from "../utils/notify";

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
  if (payload.status === 200) {
    const { data: user } = data;
    const { token } = user;
    setAuthUser(token, user);
    setToken(token);
    setLoading(false);
    notify("Login successful", "success");
    history.push("/user/profile");
  } else if (payload.status === 400) {
    setLoading(false);
    notify("All fields are required");
  } else if (payload.status === 401) {
    setLoading(false);
    notify("Wrong username or password");
  } else {
    setLoading(false);
    notify("Oops, something happend, try again");
  }
};

export { setAuthUser, loadAuthUser, handleData };

import { setToken, unsetToken } from "./api";
import notify from "./notify";

const setAuthUser = (setUser, token, user) => {
  const authUser = JSON.stringify(user);
  localStorage.setItem("authUser", authUser);
  localStorage.setItem("authToken", token);
  setUser(user);
};

const loadAuthUser = () => {
  const authUser = localStorage.getItem("authUser");
  return JSON.parse(authUser);
};

const unsetAuthUser = (unsetUser, setLoading) => {
  localStorage.removeItem("authUser");
  localStorage.removeItem("authToken");
  unsetToken();
  unsetUser({});
  setLoading(false);
  notify("Logout successful", "success");
};

const handleData = (payload, setLoading, setUser, history) => {
  const { data } = payload;
  if (payload.status === 200) {
    const { data: user } = data;
    const { token } = user;
    setAuthUser(setUser, token, user);
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

export { setAuthUser, unsetAuthUser, loadAuthUser, handleData };

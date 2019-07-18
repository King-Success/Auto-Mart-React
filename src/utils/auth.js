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

const unsetAuthUser = (unsetUser = null, setLoading = null) => {
  localStorage.removeItem("authUser");
  localStorage.removeItem("authToken");
  unsetToken();
  if (unsetUser) unsetUser({});
  if (setLoading) setLoading(false);
  if (unsetUser) notify("Logout successful", "success");
};

const comparePasswords = ({ password, confirmPassword }) => {
  return password === confirmPassword;
};

const handleData = (payload, setLoading, setUser, history) => {
  const { data } = payload;
  let user;
  let token;
  let error;
  switch (payload.status) {
    case 200:
      user = data.data;
      token = user.token;
      setAuthUser(setUser, token, user);
      setToken(token);
      setLoading(false);
      notify("Login successful", "success");
      history.push("/user/profile");
      break;
    case 201:
      user = data.data;
      token = user.token;
      setAuthUser(setUser, token, user);
      setToken(token);
      setLoading(false);
      notify("Account creation successful", "success");
      history.push("/user/profile");
      break;
    case 400:
      setLoading(false);
      error = data.error[0];
      notify(error || "All fields are required");
      break;
    case 401:
      setLoading(false);
      error = data.error[0];
      notify(error || "Wrong username or password");
      break;
    case 409:
      setLoading(false);
      error = data.error;
      notify(error || "Account with provided details already exists");
      break;
    default:
      setLoading(false);
      notify("Oops, something happend, try again");
  }
};

export {
  setAuthUser,
  unsetAuthUser,
  loadAuthUser,
  handleData,
  comparePasswords
};

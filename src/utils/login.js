const setAuthUser = (token, user) => {
  const authUser = JSON.stringify(user);
  localStorage.setItem("authUser", authUser);
  localStorage.setItem("authToken", token);
};

const loadAuthUser = () => {
  const authUser = localStorage.getItem("authUser");
  return authUser;
};

export { setAuthUser, loadAuthUser };

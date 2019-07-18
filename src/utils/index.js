import notify from "./notify";
import { unsetAuthUser } from "./auth";
// import { setToken} from './api'

const handleData = (payload, setLoading, history = {}) => {
  const { data } = payload;
  switch (payload.status) {
    case 200:
      setLoading(false);
      return data.data;
    case 401:
      setLoading(false);
      unsetAuthUser();
      history.push("/auth/login");
      notify("Oops, session expired, kindly login!");
      return false;
    case 404:
      setLoading(false);
      return [];
    default:
      setLoading(false);
      notify("Oops, something happend, try again");
      return false;
  }
};

export { handleData };

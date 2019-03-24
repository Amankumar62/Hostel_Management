import axios from "axios";

const setAuthToken = () => {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    // Apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;

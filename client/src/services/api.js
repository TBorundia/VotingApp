import axios from "axios";

const host =
  process.env.NODE_ENV === "production" ?
  "https://still-basin-67139.herokuapp.com/api" :
  "http://localhost:5000/api";


export const setToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const call = async (method, path, data) => {
  const response = await axios[method](`${host}/${path}`, data);
  return response.data;
};

export default {
  setToken,
  call
};
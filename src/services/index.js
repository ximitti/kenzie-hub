import axios from "axios";

const API = axios.create({
  baseURL: "https://kenziehub.me",
});

export default API;

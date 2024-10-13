import axios from "axios";
const urlSocket = "http://127.0.0.1:8000/api/";

const axiosIns = axios.create({
  baseURL: urlSocket,
});

export default axiosIns;

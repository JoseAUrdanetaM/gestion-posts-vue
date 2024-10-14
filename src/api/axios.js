import axios from "axios";
const urlSocket = "http://127.0.0.1:8000/api/";

const axiosIns = axios.create({
  baseURL: urlSocket,
});

// Establecer encabezados por defecto
axios.defaults.headers.common["Authorization"] = "AUTH_TOKEN";

export default axiosIns;

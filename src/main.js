import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Importa el router
import axios from "./api/axios"; // Importa axios si lo usas en tu proyecto
import "./index.css"; // Importa tus estilos

// Crea la aplicación Vue
const app = createApp(App);

// Configura axios globalmente (opcional)
app.config.globalProperties.$axios = axios;

// Usa el router
app.use(router);

// Monta la aplicación
app.mount("#app");

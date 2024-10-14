// src/api/postService.js
import axios from "./axios";

const getPosts = async () => {
  try {
    const response = await axios.get("posts"); // Llama al endpoint de posts
    return response.data.data; // Devuelve los datos de la respuesta
  } catch (error) {
    console.error("Error al obtener los posts:", error);
    throw error; // Lanza el error para manejarlo en otro lugar si es necesario
  }
};

export default {
  getPosts,
};

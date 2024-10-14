<!-- src/components/Login.vue -->
<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <form
      @submit.prevent="login"
      class="bg-white p-6 rounded-lg shadow-md w-96"
    >
      <h2 class="text-2xl font-bold mb-6">Iniciar Sesión</h2>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Correo Electrónico</label
        >
        <input
          v-model="email"
          type="email"
          id="email"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700"
          >Contraseña</label
        >
        <input
          v-model="password"
          type="password"
          id="password"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-600 text-white font-semibold rounded-md p-2 hover:bg-blue-700"
      >
        Iniciar Sesión
      </button>
      <p v-if="errorMessage" class="text-red-600 mt-4">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "../api/axios";

const email = ref("");
const password = ref("");
const errorMessage = ref("");
const router = useRouter();

const login = async () => {
  errorMessage.value = ""; // Limpiar mensaje de error

  try {
    const response = await axios.post("/login", {
      email: email.value,
      password: password.value,
    });

    console.log(response.data); // <-- Agrega esto para inspeccionar la respuesta del servidor

    // Verifica si el token está en la respuesta
    if (response.data.accessToken) {
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("userName", response.data.name);
      localStorage.setItem("userRole", response.data.role);
      router.push("/");
    } else {
      throw new Error("Token no recibido");
    }
  } catch (error) {
    console.error("Error durante el login:", error);
    errorMessage.value =
      "Credenciales incorrectas o error en el servidor. Inténtalo de nuevo.";
  }
};
</script>

<style scoped>
/* Estilos opcionales para el formulario */
</style>

<template>
  <div class="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-md bg-white">
    <h2 class="text-2xl font-bold mb-4">Registro</h2>
    <form @submit.prevent="registerUser">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Nombre de usuario</label
        >
        <input
          v-model="user.name"
          type="text"
          id="name"
          class="mt-1 p-2 border rounded w-full"
          required
        />
      </div>

      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Correo electrónico</label
        >
        <input
          v-model="user.email"
          type="email"
          id="email"
          class="mt-1 p-2 border rounded w-full"
          required
        />
      </div>

      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700"
          >Contraseña</label
        >
        <input
          v-model="user.password"
          type="password"
          id="password"
          class="mt-1 p-2 border rounded w-full"
          required
        />
      </div>

      <button
        type="submit"
        class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Registrarse
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const user = ref({
  name: "",
  email: "",
  password: "",
});

const registerUser = async () => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/register",
      user.value
    );
    console.log("Usuario registrado:", response.data);
    // Aquí puedes redirigir o mostrar un mensaje de éxito

    router.push("/login");
  } catch (error) {
    console.error("Error registrando el usuario:", error.response.data);
    // Manejar errores, como mostrar mensajes de error en el formulario
  }
};
</script>

<style scoped>
/* Estilos adicionales si los necesitas */
</style>

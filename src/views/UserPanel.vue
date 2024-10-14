<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Panel de Usuario</h1>

    <form @submit.prevent="updateUser" class="mb-6">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium">Nombre</label>
        <input
          v-model="userForm.name"
          type="text"
          id="name"
          required
          class="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium">Email</label>
        <input
          v-model="userForm.email"
          type="email"
          id="email"
          required
          class="mt-1 p-2 border rounded w-full"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium"
          >Contraseña</label
        >
        <input
          v-model="userForm.password"
          type="password"
          id="password"
          class="mt-1 p-2 border rounded w-full"
        />
      </div>
      <button
        type="submit"
        class="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        Actualizar
      </button>
    </form>

    <h2 class="text-xl font-bold mb-2">Mis Posts</h2>
    <div v-if="userPosts.length === 0">No tienes posts.</div>
    <ul class="list-disc ml-6">
      <li v-for="post in userPosts" :key="post.id">
        <a :href="`/blog/${post.id}`" class="text-blue-600 hover:underline">{{
          post.title
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const userForm = ref({
  name: "",
  email: "",
  password: "",
});

const userPosts = ref([]);

// Obtener información del usuario y sus posts
const fetchUserData = async () => {
  const userId = localStorage.getItem("userId"); // Suponiendo que guardas el ID del usuario en el localStorage
  try {
    const userResponse = await userService.getUsers(userId);
    userForm.value = {
      name: userResponse.data.name,
      email: userResponse.data.email,
      password: "",
    }; // Ajusta según tu API
    const postsResponse = await userService.getUserPosts(userId);
    userPosts.value = postsResponse.data; // Ajusta según tu API
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

// Actualizar información del usuario
const updateUser = async () => {
  const userId = localStorage.getItem("userId"); // Suponiendo que guardas el ID del usuario en el localStorage
  try {
    await userService.updateUser(userId, userForm.value);
    alert("Información actualizada con éxito.");
    fetchUserData(); // Refrescar datos del usuario
  } catch (error) {
    console.error("Error updating user:", error);
  }
};
</script>

<style scoped>
/* Estilos opcionales */
</style>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Panel de Usuario</h1>

    <form @submit.prevent="updateUser" class="mb-6">
      <h3 class="text-xl mb-4">Actualizar Datos</h3>
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
    <div class="grid grid-cols-4 gap-10">
      <Card
        v-for="post in userPosts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :description="post.info"
        :image="post.img"
        :author="post.user_id"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import frontServiceConnect from "../api/frontServiceConnect.js";
import Card from "../components/Card.vue";

const showModal = ref(false);
const editForm = ref({
  id: null,
  name: "",
  email: "",
});

const userForm = ref({
  name: "",
  email: "",
  password: "",
});

const userPosts = ref([]);

// Obtener información del usuario y sus posts
const fetchUserData = async () => {
  const userId = localStorage.getItem("userId");
  try {
    const userResponse = await frontServiceConnect.getUser(userId);
    userForm.value = {
      name: userResponse.data.name,
      email: userResponse.data.email,
      password: "",
    };
    const postsResponse = await frontServiceConnect.getUserPost(userId);
    userPosts.value = postsResponse.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

// Actualizar información del usuario
const updateUser = async () => {
  const userId = localStorage.getItem("userId");
  try {
    await frontServiceConnect.updateUser(userId, userForm.value);
    alert("Información actualizada con éxito.");
    fetchUserData(); // Refrescar datos del usuario
  } catch (error) {
    console.error("Error updating user:", error);
  }
};

const updatePost = async () => {
  try {
    const token = localStorage.getItem("token");
    await frontServiceConnect.updatePost(editPost.value.id, editPost.value, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    ListPosts(); // Refrescar la lista de posts después de actualizar
    closeEditModal(); // Cerrar modal de edición
  } catch (error) {
    console.error("Error actualizando post:", error);
  }
};

// Eliminar post
const deletePost = async (postId) => {
  try {
    const token = localStorage.getItem("token");
    await frontServiceConnect.deletePost(postId, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }); // Asegúrate de que esta función exista en tu frontServiceConnect
    alert("Post eliminado con éxito.");
    fetchUserData(); // Refrescar la lista de posts después de eliminar uno
  } catch (error) {
    console.error("Error deleting post:", error);
  }
};

onMounted(fetchUserData);
</script>

<style scoped>
/* Estilos opcionales */
</style>

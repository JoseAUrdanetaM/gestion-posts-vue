<script setup>
import { onMounted, ref } from "vue";
import frontServiceConnect from "../api/frontServiceConnect.js";
import Card from "../components/Card.vue";
import Modal from "../components/Modal.vue";

const ListAllPosts = ref("");

const ListPosts = () => {
  frontServiceConnect
    .getPosts()
    .then((response) => {
      ListAllPosts.value = response.data.data;
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
};

const isModalOpen = ref(false); // Controla la visibilidad del modal
const newPost = ref({ title: "", info: "", img: "" }); // Datos del nuevo post

const openModal = () => {
  isModalOpen.value = true; // Abrir modal
};

const closeModal = () => {
  isModalOpen.value = false; // Cerrar modal
  newPost.value = { title: "", info: "", img: "" }; // Reiniciar los datos
};

const createNewPost = async () => {
  try {
    const token = localStorage.getItem("token"); // Obtener el token almacenado
    const response = await frontServiceConnect.createPost(newPost.value, {
      headers: {
        Authorization: `Bearer ${token}`, // Incluir el token en los headers
      },
    });

    console.log("Post creado:", response.data);
    ListPosts(); // Refrescar la lista de posts después de crear uno nuevo
    closeModal(); // Cerrar modal después de crear el post
  } catch (error) {
    console.error("Error creando post:", error);
    if (error.response) {
      console.error("Detalles del error:", error.response.data);
    }
  }
};

onMounted(() => {
  ListPosts();
});
</script>

<template>
  <div>
    <button
      type="button"
      @click="openModal"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Crear nuevo Post
    </button>

    <!-- Modal -->
    <Modal v-if="isModalOpen" @close="closeModal" :newPost="newPost">
      <template #header>
        <h2 class="text-lg font-bold">Crear Nuevo Post</h2>
      </template>
      <template #body="{ newPost }">
        <!-- Formulario para crear un nuevo post -->
        <form @submit.prevent="createNewPost" class="mb-4">
          <div class="mb-4">
            <label for="title" class="block text-sm font-medium text-gray-700"
              >Título</label
            >
            <input
              v-model="newPost.title"
              type="text"
              id="title"
              class="mt-1 p-2 border rounded w-full"
              required
            />
          </div>

          <div class="mb-4">
            <label for="info" class="block text-sm font-medium text-gray-700"
              >Descripción</label
            >
            <textarea
              v-model="newPost.info"
              id="info"
              class="mt-1 p-2 border rounded w-full"
              required
            ></textarea>
          </div>

          <div class="mb-4">
            <label for="img" class="block text-sm font-medium text-gray-700"
              >Imagen URL</label
            >
            <input
              v-model="newPost.img"
              type="text"
              id="img"
              class="mt-1 p-2 border rounded w-full"
            />
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 me-5 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Guardar Post
          </button>
        </form>
      </template>
    </Modal>
  </div>

  <div class="flex flex-wrap gap-6">
    <Card
      v-for="(post, index) in ListAllPosts"
      :key="index"
      :id="post.id"
      :title="post.title"
      :description="post.info"
      :image="post.img"
      :author="post.user_id"
    />
  </div>
</template>

<style scoped></style>

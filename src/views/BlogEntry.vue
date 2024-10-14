<script setup>
import { onMounted, ref } from "vue";
import frontServiceConnect from "../api/frontServiceConnect.js";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const ListSinglePost = ref("");

const ListPost = () => {
  frontServiceConnect
    .getPost(route.params.id)
    .then((response) => {
      ListSinglePost.value = response.data.data;
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
};

const isEditModalOpen = ref(false); // Controla la visibilidad del modal de edición
const editedPost = ref({ title: "", info: "", img: "" }); // Datos del post a editar

const openEditModal = () => {
  editedPost.value = {
    title: ListSinglePost.value.title,
    info: ListSinglePost.value.info,
    img: ListSinglePost.value.img,
  }; // Pre-poblar con los datos actuales del post
  isEditModalOpen.value = true; // Abrir modal
};

const closeEditModal = () => {
  isEditModalOpen.value = false; // Cerrar modal
};

const updatePost = async () => {
  try {
    const token = localStorage.getItem("token");
    await frontServiceConnect.updatePost(route.params.id, editedPost.value, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    alert("Post actualizado con éxito.");
    ListPost(); // Refrescar la lista después de la actualización
    closeEditModal(); // Cerrar el modal
  } catch (error) {
    console.error("Error actualizando el post:", error);
    alert("Hubo un error al actualizar el post. Intenta de nuevo.");
  }
};

const deletePost = async () => {
  const confirmed = confirm("¿Estás seguro de que deseas eliminar este post?");
  if (!confirmed) {
    return; // Si el usuario cancela, salir de la función
  }

  try {
    const token = localStorage.getItem("token");
    await frontServiceConnect.deletePost(route.params.id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    alert("Post eliminado con éxito.");
    router.push("/"); // Redirigir después de eliminar el post
  } catch (error) {
    console.error("Error eliminando el post:", error);
    alert("Hubo un error al eliminar el post. Intenta de nuevo.");
  }
};

onMounted(() => {
  ListPost();
});
</script>

<template>
  <div
    class="max-w-4xl mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <img
      :src="ListSinglePost.img"
      alt="Post image"
      class="mb-4 w-full h-96 object-cover rounded-lg"
    />
    <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
      {{ ListSinglePost.title }}
    </h1>
    <p class="text-gray-500 dark:text-gray-400 mb-2">
      By {{ ListSinglePost.user_id }}
    </p>
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
      {{ ListSinglePost.info }}
    </p>
    <div class="text-base text-gray-600 dark:text-gray-400">
      {{ ListSinglePost.content }}
      <!-- Contenido detallado -->
    </div>

    <!-- Botones de modificar y eliminar -->
    <div class="mt-6 flex space-x-4">
      <button
        @click="openEditModal"
        class="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
      >
        Modificar
      </button>
      <button
        @click="deletePost"
        class="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
      >
        Eliminar
      </button>
    </div>
  </div>

  <div
    v-if="isEditModalOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white p-4 rounded shadow-md">
      <h2 class="text-lg font-bold">Modificar Post</h2>
      <form @submit.prevent="updatePost" class="mb-4">
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-700"
            >Título</label
          >
          <input
            v-model="editedPost.title"
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
            v-model="editedPost.info"
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
            v-model="editedPost.img"
            type="text"
            id="img"
            class="mt-1 p-2 border rounded w-full"
          />
        </div>
        <div class="flex justify-end">
          <button
            type="button"
            @click="closeEditModal"
            class="mr-2 px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancelar
          </button>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>

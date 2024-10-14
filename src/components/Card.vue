<template>
  <a
    :href="`/blog/${id}`"
    class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <img
      :src="image"
      alt="Blog image"
      class="mb-4 w-full h-48 object-cover rounded-lg"
    />
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {{ title }}
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      {{ description }}
    </p>

    <!-- Contenedor para los íconos -->
    <div v-if="canEdit" class="absolute bottom-4 right-4 flex space-x-2">
      <button @click="editPost" class="text-blue-600 hover:text-blue-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.232 5.232a8.001 8.001 0 01-11.314 11.314M19.5 3.5l-3 3m3-3l-3 3m3-3l3 3"
          />
        </svg>
      </button>
      <button @click="deletePost" class="text-red-600 hover:text-red-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </a>
</template>

<script setup>
// Define las props que va a recibir el componente
const props = defineProps({
  id: Number,
  title: String,
  description: String,
  image: String, // Nueva prop para la imagen
  canEdit: Boolean, // Prop para determinar si el usuario puede editar
});

// Métodos para manejar la edición y eliminación del post
const editPost = () => {
  // Lógica para editar el post
};

const deletePost = () => {
  // Lógica para eliminar el post
};
</script>

<style scoped>
/* Asegúrate de que el contenedor de los íconos esté posicionado correctamente */
.relative {
  position: relative; /* Asegúrate de que el contenedor padre tenga posición relativa */
}
</style>

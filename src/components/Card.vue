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
    <!-- Imagen dinámica -->
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {{ title }}
      <!-- Título dinámico -->
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      {{ description }}
      <!-- Descripción dinámica -->
    </p>
  </a>
</template>

<script setup>
// Define las props que va a recibir el componente
defineProps({
  id: Number,
  title: String,
  description: String,
  image: String, // Nueva prop para la imagen
});
</script>

<style scoped></style>
